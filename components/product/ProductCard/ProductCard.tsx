

import { Product } from '@common/types/products'
import React, { FC } from 'react'
import Image from "next/image"
import Link from "next/link"

interface Props{
    product: Product
}

const placeholder = "/placeholder.svg"

const ProductCard: FC<Props> = ({ product }) => {
    return (
        <Link href={`/products/${product.slug}`}>
            <a>
                <h3>
                    <span>
                        {product.name}
                    </span>
                </h3>
                <span>20 $</span>
                {product.images && <Image 
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
