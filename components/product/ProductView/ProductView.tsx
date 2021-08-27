import { FC, useState } from "react";
import s from "./ProductView.module.css";
import { Container, Button } from "@components/common/ui";
import Image from "next/image";
import { Product } from "@common/types/products";
import { ProductSlider, Swatch } from "@components/product";
import { StateChoises, getVariant } from "../helper"
import { useUi } from "@components/context/Provider"
import useAddItem from "@framework/cart/use-add-item"
import { useApiProvider } from "@framework"

interface Props {
  product: Product;
}



const ProductView: FC<Props> = ({ product }) => {

    const addItem = useAddItem()

    const { onOpenSideBar } = useUi()

    const [choises, setChoises] = useState<StateChoises>({})

    const variant = getVariant(product, choises)

    const addToCart = () => {
      try {
        const item = {
          productId: String(product.id),
          variantId: variant?.id,
          variantOptions: variant?.options
        }
        const output = addItem(item)
        alert(JSON.stringify(output))
        onOpenSideBar()
      } catch (error) {
        throw new Error(error.message ?? error)
      }
    }

  return (
    <Container>
      <div className={[s.root, "fit"].join(" ")}>
        <div className={[s.productDisplay, "fit"].join(" ")}>
          <div className={s.nameBox}>
            <h1 className={s.name}>{product.name}</h1>
            <div className={s.price}>
              {product.price.value}
              {` `}
              {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
            {product.images.map((image) => (
              <div key={image.image} className={s.imageContainer}>
                <Image
                  className={s.img}
                  src={image.image}
                  alt={image.alt}
                  width={1050}
                  height={1050}
                  quality="85"
                />
              </div>
            ))}
          </ProductSlider>
        </div>
        <div className={s.sidebar}>
          <section>
            {product.options.map((op) => (
              <div key={op.id} className="pb-4">
                <h2 className="uppercase font-medium">{op.displayName}</h2>
                <div className="flex flex-row py-4">
                  {op.values.map((val) => {
                    const active = choises[op.displayName.toLowerCase()]
                    return <Swatch
                      key={`${op.id}-${val.label}`}
                      label={val.label}
                      active={val.label.toLowerCase() === active}
                      hexColor={val.hexColor}
                      variant={op.displayName}
                      onClick={() => setChoises((prev) => {
                          return{...prev, [op.displayName.toLowerCase()]: val.label.toLowerCase()}
                        })}
                    />
                    })}
                </div>
              </div>
            ))}
            <div className="pb-14 break-words w-full max-w-xl text-lg">
              {product.description}
            </div>
          </section>
          <div>
            <Button className={s.button} onClick={addToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductView;
