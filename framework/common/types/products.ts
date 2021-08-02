export interface ProductImages{
    alt?: string,
    src: string
}

export interface Product {
    id: string,
    name: string,
    path: string,
    slug: string,
    vendor: string,
    images: Array<ProductImages>
}