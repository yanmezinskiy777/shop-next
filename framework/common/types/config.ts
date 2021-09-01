
export interface FetchParams{
    query?: string,
    variables?: Variables
}

export type Variables = {
    [slug: string]: string | any | undefined
}

export interface ApiConfig {
    fetch<T>(options: FetchParams): Promise<FetchResult<T>>
}

export interface FetchResult<T>{
    data: T
}

export interface ApiHooks {
    cart: {
      useAddItem: any
    }
}


export type ApiFetcher<T = any> = (options: FetchParams) => Promise<FetchResult<T>>

export interface ApiContextValues {
    hooks: ApiHooks
    fetcher: ApiFetcher
}