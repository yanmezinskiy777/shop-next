import { ApiHooks } from "@common/types/config";
import { MutationHook } from "@common/types/hooks"
import { useApiProvider } from "@common"

export const useHook = (fn: (apiHooks: ApiHooks) => MutationHook) => {
    const { hooks } = useApiProvider()
    return fn(hooks)
}

export const useMutationHook = (hook: MutationHook) => {
    const { fetcher } = useApiProvider()
    return hook.useHook({
         fetch: (input: any) => {
             return hook.fetcher({
                 input,
                 fetch: fetcher,
                 options: hook.fetcherOptions
             })
         } 
    })
}