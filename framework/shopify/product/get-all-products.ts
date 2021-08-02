import { queryGetAllProducts } from "../../utils/queries";
import { fetchApi, normalizeProduct } from "../../utils";
import { ProductConnection } from "../schema";
import { Product } from "@common/types/products";

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (): Promise<Array<Product>> => {
  const { data } = await fetchApi<ReturnType>({ query: queryGetAllProducts });

  return (
    data.products.edges.map(({ node: product }) => normalizeProduct(product)) ??
    []
  );
};

export default getAllProducts;
