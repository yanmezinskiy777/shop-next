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

interface ProrictOption{
    id: string,
    displayName: string,
    values: ProductOptionValues[]
}

interface ProductVariant {
    id: string,
    name: string,
    options: ProrictOption[]
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
    options: ProrictOption[],
    variants: ProductVariant[]
}