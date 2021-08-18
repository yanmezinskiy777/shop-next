import type { InferGetStaticPropsType } from "next";
import { getAllProducts } from "@framework/product";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid, Hero, Marquee } from "@components/common/ui";

export async function getStaticProps() {
  const config = getConfig();
  const prod = await getAllProducts(config);

  return {
    props: {
      products: prod,
    },
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(products);

  return (
    <>
      <Grid layout="A">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Grid>
      <Hero
        headline="Super mega product in this page"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
         printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
         only five centuries, but also the leap into electronic typesetting."
      />
      <Marquee>
        {products &&
          products.map((product) => (
            <ProductCard variant="slim" key={product.id} product={product} />
          ))}
      </Marquee>
      <Grid layout="B">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Grid>
      <Marquee variant="secondary">
        {products &&
          products.map((product) => (
            <ProductCard variant="slim" key={product.id} product={product} />
          ))}
      </Marquee>
    </>
  );
}

Home.Layout = Layout;
