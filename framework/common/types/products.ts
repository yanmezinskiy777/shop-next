export interface ProductImages{
    alt?: string,
    image: string
}

interface Price{
    value: number,
    currencyCode: string
}

interface ProductOptionValues{
    label: string,
    hexColor?: string
}

export interface ProductOption{
    id: string,
    displayName: string,
    values: ProductOptionValues[]
}

export interface ProductVariant {
    id: string,
    name: string,
    sku: string
    image?: ProductImages
    requiresShipping?: boolean
    price: number
    listPrice: number
    options: ProductOption[]
}

export interface Product {
    id: string,
    name: string,
    path: string,
    slug: string,
    vendor: string,
    images: Array<ProductImages>
    price: Price,
    description: string
    options: ProductOption[],
    variants: ProductVariant[]
}