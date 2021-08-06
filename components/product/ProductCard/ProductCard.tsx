

import { Product } from '@common/types/products'
import React, { FC } from 'react'
import Image from "next/image"
import Link from "next/link"
import style from "./ProductCard.module.css"

interface Props{
    product: Product
}

const placeholder = "/placeholder.svg"

const ProductCard: FC<Props> = ({ product }) => {
    return (
        <Link href={`/products/${product.slug}`}>
            <a className={style.root}>
                <div className={style.productBg}></div>
                <div className={style.productTag}>
                    <h3 className={style.productTitle}>
                        <span>
                            {product.name}
                        </span>
                    </h3>
                    <span className={style.productPrice}>20 $</span>
                </div>
                {product.images && <Image 
                                    className={style.productImage}
                                    alt={product.name ?? "Product image"} 
                                    src={product.images[0].image ?? placeholder} 
                                    quality="90" 
                                    width={450} 
                                    height={450} 
                                    layout="responsive" />}
            </a>
        </Link>
    )
}

export default ProductCard
