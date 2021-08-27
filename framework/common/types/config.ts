
export interface FetchParams{
    query: string,
    apiUrl: string,
    variables?: Variables
}

export type Variables = {
    [slug: string]: string
}

export interface FetchResult<T>{
    data: T
}

export interface ConfigParams{
    apiUrl: string,
    fetch: ApiFetcher,
    variables?: Variables
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