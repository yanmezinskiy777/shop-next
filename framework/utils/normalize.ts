import { ImageEdge, Product as ShopifyProduct } from "../shopify/schema";
import { Product } from "@common/types/products";

const normalizedImageConnection = (edges: Array<ImageEdge>) =>
  edges.map(({ node: { originalSrc: src, ...rest } }) => {
    return { image: `/images/${src}`, ...rest };
  });

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    ...rest
  } = productNode;

  const normalizedProduct = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    images: normalizedImageConnection(imageConnection.edges),
    ...rest,
  };

  return normalizedProduct;
}
