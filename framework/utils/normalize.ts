import {
  ImageEdge,
  Product as ShopifyProduct,
  MoneyV2,
  ProductOption,
  ProductVariantConnection,
  SelectedOption,
  Checkout,
  CheckoutLineItemEdge,
} from "../shopify/schema";
import { Product } from "@common/types/products";
import { Cart, LineItem } from "@common/types/cart";

const normalizedImageConnection = (edges: Array<ImageEdge>) =>
  edges.map(({ node: { originalSrc: src, ...rest } }) => {
    return { image: `/images/${src}`, ...rest };
  });

  const normalizeProductPrice = ({currencyCode, amount}: MoneyV2) => ({
    value: +amount,
    currencyCode
  })

const normalizeOptions = ({ id, values, name: displayName }: ProductOption) => {
  return {
    id,
    displayName,
    values: values.map((val) => {
      let output: any = {
        label: val,
      };
      if (displayName.match(/colou?r/gi)) {
        output = {
          ...output,
          hexColor: val,
        };
      }
      return output;
    }),
  };
};

const normalizedVariants = ({ edges }: ProductVariantConnection) => {
    return edges.map(({node}) => {
      const { id, title, sku, priceV2, compareAtPriceV2, selectedOptions } = node
      return{
        id,
        name: title,
        sku: sku || id,
        price: +priceV2.amount,
        listPrice: +compareAtPriceV2.amount,
        requaireShipping: true,
        options: selectedOptions.map(({ name, value }: SelectedOption) => {
          return normalizeOptions({
            id,
            values: [value],
            name
          })
        })
      }
    })
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    priceRange,
    options,
    variants,
    ...rest
  } = productNode;

  return {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    images: normalizedImageConnection(imageConnection.edges),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    options: options
      ? options
          .filter((o) => o.name !== "Title")
          .map((o) => normalizeOptions(o))
      : [],
    variants: variants ? normalizedVariants(variants) : [],
    ...rest,
  };
}

const normalizeLineItem = ({
  node: { id, title, variant, ...rest}
}: CheckoutLineItemEdge): LineItem => {
  return {
    id,
    variantId: String(variant?.id),
    productId: String(variant?.id),
    name: title,
    path: variant?.product?.handle ?? "",
    discounts: [],
    options: variant?.selectedOptions.map(({name, value}: SelectedOption) => {
      const option = normalizeOptions({
        id,
        name,
        values: [value]
      })

      return option
    }),
    variant: {
      id: String(variant?.id),
      sku: variant?.sku ?? "",
      name: variant?.title,
      // TODO: image
      image: {
        image: process.env.NEXT_PUBLIC_FRAMEWORK === "shopify_local" ?
          `/images/${variant?.image?.originalSrc}` :
          variant?.image?.originalSrc ?? "/product-image-placeholder.svg"
      },
      requiresShipping: variant?.requiresShipping ?? false,
      // actual price
      price: variant?.priceV2.amount,
      // base price
      listPrice: variant?.compareAtPriceV2?.amount,
    },
    ...rest
  }
}

export const normalizeCart = (checkout: Checkout): Cart =>{
  return {
    id: checkout.id,
    createdAt: checkout.createdAt,
    currency: {
      code: checkout.totalPriceV2.currencyCode
    },
    taxesIncluded: checkout.taxesIncluded,
    lineItemsSubtotalPrice: +checkout.subtotalPriceV2.amount,
    totalPrice: checkout.totalPriceV2.amount,
    lineItems: checkout.lineItems.edges.map(normalizeLineItem),
    discounts: []
  }
}
