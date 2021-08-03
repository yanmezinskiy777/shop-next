import { queryGetAllProducts } from "../../utils/queries";
import { normalizeProduct } from "../../utils";
import { ProductConnection } from "../schema";
import { Product } from "@common/types/products";
import { ConfigParams } from "@common/types/config";

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (config: ConfigParams): Promise<Array<Product>> => {

  const { data } = await config.fetch<ReturnType>({ query: queryGetAllProducts, apiUrl: config.apiUrl });

  return (
    data.products.edges.map(({ node: product }) => normalizeProduct(product)) ??
    []
  );
};

export default getAllProducts;
