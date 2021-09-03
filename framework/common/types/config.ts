import { ApiHooks } from "./hooks"

export interface FetchParams{
    query?: string,
    variables?: Variables
}

export type Variables = {
    [slug: string]: string | any | undefined
}

export interface ApiConfig {
    fetch<T>(options: FetchParams): Promise<FetchResult<T>>
    checkoutCookie: string
}

export interface FetchResult<T>{
    data: T
}

export type ApiFetcher<T = any> = (options: FetchParams) => Promise<FetchResult<T>>

export interface ApiContextValues {
    hooks: ApiHooks
    fetcher: ApiFetcher
    checkoutCookie: string
}