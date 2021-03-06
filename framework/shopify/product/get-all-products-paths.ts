
import { ConfigParams } from "@common/types/config";
import { Product } from "@common/types/products";
import { ProductConnection } from "@framework/schema";
import queryGetAllProductsPaths from "../../utils/queries/get-all-products-paths"

type ReturnType = {
    paths: Pick<Product, "slug">[]
}


const getAllProductsPaths = async (options: ConfigParams): Promise<ReturnType> => {

    const { data } = await options.config.fetch<{products: ProductConnection}>({ query: queryGetAllProductsPaths })

    const paths = data.products.edges.map( ({ node: { handle }}) => ({ slug: handle }))

    return{ paths }
}

export default getAllProductsPaths