import { FetchParams, ApiFetcher } from "./config"

type HookContext = {
    fetch: (input: any) => any
}

type FetcherContext = {
    input?: any
    fetch: ApiFetcher
    options: FetchParams
}

export type MutationHook = {
    fetcherOptions: FetchParams
    fetcher: (context: FetcherContext) => any
    useHook(context: HookContext): (input: any) => any
}

export interface ApiHooks {
    cart: {
      useAddItem: MutationHook
      useCart: any
    }
}
