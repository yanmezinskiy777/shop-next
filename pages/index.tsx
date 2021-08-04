
import type { InferGetStaticPropsType } from "next"
import getAllProducts from "@framework/product/get-all-products"
import { getConfig } from "@framework/api/config"
import { Layout } from "@components/common"

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
    <div>
        {products && products.map(prod => <p key={prod.id}>{prod.name}</p>)}
    </div>
  )
}

Home.Layout = Layout


