

import { Product } from '@common/types/products'
import React, { FC } from 'react'
import Image from "next/image"
import Link from "next/link"
import style from "./ProductCard.module.css"

interface Props{
    product: Product,
    variant?: "simple" | "slim"
}

const placeholder = "/placeholder.svg"

const ProductCard: FC<Props> = ({ product, variant = "simple" }) => {
    return (
        <Link href={`/products/${product.slug}`}> 
        <a className={style.root}>
            {variant === "simple" ?
             <>
                <div className={style.productBg}></div>
                <div className={style.productTag}>
                    <h3 className={style.productTitle}>
                        <span>
                            {product.name}
                        </span>
                    </h3>
                    <span className={style.productPrice}>{product.price.value} {product.price.currencyCode}</span>
                </div>
                {product.images && <Image 
                                    className={style.productImage}
                                    alt={product.name ?? "Product image"} 
                                    src={product.images[0].image ?? placeholder} 
                                    quality="90" 
                                    width={450} 
                                    height={450} 
                                    layout="responsive" />}
             </>                                    
             : 
            <>
              <div className="absolute flex items-center justify-center z-20 inset-0">
                  <span className="bg-black text-white p-3 font-bold text-xl">{product.name}</span>
              </div>
              {product.images && <Image 
                                    className={style.productImage}
                                    alt={product.name ?? "Product image"} 
                                    src={product.images[0].image ?? placeholder} 
                                    quality="90" 
                                    width={320} 
                                    height={320} 
                                    layout="fixed" />}
            </>
            }
            </a>
        </Link>
    )
}

export default ProductCard
