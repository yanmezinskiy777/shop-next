import type { InferGetStaticPropsType } from "next"
import getAllProducts from "@shopify/product/get-all-products"

export async function getStaticProps(){
  const prod = await getAllProducts()

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
