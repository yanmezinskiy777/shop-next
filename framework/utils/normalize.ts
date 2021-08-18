import { ImageEdge, Product as ShopifyProduct, MoneyV2 } from "../shopify/schema";
import { Product } from "@common/types/products";

const normalizedImageConnection = (edges: Array<ImageEdge>) =>
  edges.map(({ node: { originalSrc: src, ...rest } }) => {
    return { image: `/images/${src}`, ...rest };
  });

const normalizedPrice = (range: MoneyV2 ) => {
    return{
      value: range.amount,
      currencyCode: range.currencyCode
    }
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
    ...rest
  } = productNode;

  return{
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    images: normalizedImageConnection(imageConnection.edges),
    price: normalizedPrice(priceRange.minVariantPrice),
    ...rest,
  }
}
