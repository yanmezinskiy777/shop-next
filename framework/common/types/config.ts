
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
    fetch<T>(options: FetchParams): Promise<FetchResult<T>>,
    variables?: Variables
}