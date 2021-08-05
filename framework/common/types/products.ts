export interface ProductImages{
    alt?: string,
    image: string
}

export interface Product {
    id: string,
    name: string,
    path: string,
    slug: string,
    vendor: string,
    images: Array<ProductImages>
}