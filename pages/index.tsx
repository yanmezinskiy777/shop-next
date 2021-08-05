
import type { InferGetStaticPropsType } from "next"
import getAllProducts from "@framework/product/get-all-products"
import { getConfig } from "@framework/api/config"
import { Layout } from "@components/common"
import { ProductCard } from "@components/product"
import { Grid } from "@components/common/ui"

export async function getStaticProps(){
  const config = getConfig()
  const prod = await getAllProducts(config)

  return{
    props:{
      products: prod
    }
  }
}

export default function Home({ products } : InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(products)

  return (
    <Grid layout="A">
        {products && products.map(product => <ProductCard key={product.id} product={product} />)}
    </Grid>
  )
}

Home.Layout = Layout


