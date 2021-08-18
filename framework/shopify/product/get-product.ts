import { ConfigParams } from "@common/types/config";
import getProductQuery from "../../utils/queries/get-product-by-handle";
import { Product as ShopifyProduct } from "@framework/schema"
import { Product as ProductNorm } from "@common/types/products"
import { normalizeProduct } from "../../utils/normalize"

type FetchProduct = {
    productByHandle: ShopifyProduct
}

type ReturnType = {
    product: ProductNorm | null
}

const getProduct = async (config: ConfigParams): Promise<ReturnType> => {
  const { data } = await config.fetch<FetchProduct>({
    query: getProductQuery,
    apiUrl: config.apiUrl,
    variables: config.variables,
  });

  const { productByHandle } = data

  return {
    product: productByHandle ? normalizeProduct(productByHandle) : null,
  };
};

export default getProduct;
