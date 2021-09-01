import React from "react"
import { Layout } from "@components/common"
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next"
import { getAllProductsPaths, getProduct } from "@framework/product"
import { getConfig } from "@framework/api/config";
import { ProductView } from "@components/product"

export const getStaticPaths: GetStaticPaths = async () => {
    const config = getConfig()
    const args = {
        config,
    }
    const { paths } = await getAllProductsPaths(args);
    return {
        paths: paths.map(path => ({params: { slug: path.slug }})),
        fallback: false
    }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext<{slug: string}>) => {
    const config = getConfig()
    const args = {
        config,
        variables: { slug: params.slug }
    }
    const { product } = await getProduct(args);
   return{
       props: { product }
   }
}

export default function ProductPage({ product }: InferGetStaticPropsType<typeof getStaticProps>){
    console.dir(product)
    return(
        <>
          {product && <ProductView product={product} />}
        </>
    )
}

ProductPage.Layout = Layout