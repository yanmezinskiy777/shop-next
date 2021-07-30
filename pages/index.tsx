import type { InferGetStaticPropsType } from "next"
import getAllProducts from "../framework/shopify/product/get-all-products"

export async function getStaticProps(){
  const prod = await getAllProducts()

  return{
    props:{
      products: prod
    }
  }
}

export default function Home({ products } : InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <div>
        {products && products.map(prod=> <p key={prod}>{prod}</p>)}
    </div>
  )
}
