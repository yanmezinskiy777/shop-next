import {
  ImageEdge,
  Product as ShopifyProduct,
  MoneyV2,
  ProductOption,
  ProductVariantConnection,
  SelectedOption,
} from "../shopify/schema";
import { Product } from "@common/types/products";

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
