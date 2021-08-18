export interface ProductImages{
    alt?: string,
    image: string
}

interface Price{
    value: string,
    currencyCode: string
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
}