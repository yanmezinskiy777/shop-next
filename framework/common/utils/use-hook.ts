import { ApiHooks } from "@common/types/config";
import { MutationHook } from "@common/types/hooks"
import { useApiProvider } from "@common"

export const useHook = (fn: (apiHooks: ApiHooks) => MutationHook) => {
    const { hooks } = useApiProvider()
    return fn(hooks)
}