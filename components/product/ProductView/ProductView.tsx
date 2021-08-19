import { FC } from 'react'
import s from './ProductView.module.css'
import { Container } from '@components/common/ui'
import Image from "next/image"
import { Product } from '@common/types/products'
import { ProductSlider } from "@components/product"
import { Button } from "@components/common/ui"

interface Props {
  product: Product
}

const ProductView: FC<Props> = ({ product }) => {

  return (
    <Container>
      <div className={[s.root, 'fit'].join(" ")}>
        <div className={[s.productDisplay, 'fit'].join(" ")}>
          <div className={s.nameBox}>
            <h1 className={s.name}>{product.name}</h1>
            <div className={s.price}>
              {product.price.value}
              {` `}
              {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
            {product.images.map(image => (
                <div key={image.image} className={s.imageContainer}>
                    <Image
                    className={s.img}
                    src={image.image}
                    alt={image.alt}
                    width={1050}
                    height={1050}
                    quality="85"
                    />
                </div>))}
          </ProductSlider>
        </div>
        <div className={s.sidebar}>
          <section>
            <div className="pb-4">
              <h2 className="uppercase font-medium">Color</h2>
              <div className="flex flex-row py-4">
                Variant Options Here!
              </div>
            </div>
            <div className="pb-14 break-words w-full max-w-xl text-lg">
              {product.description}
            </div>
          </section>
          <div>
            <Button
             className={s.button}
             onClick={() => alert("Click!")}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductView