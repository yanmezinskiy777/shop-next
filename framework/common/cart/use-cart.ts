import { ApiHooks } from "@common/types/hooks"
import { useHook, useSWRhook } from "@common/utils/use-hook"
import { useApiProvider } from "@common"
import Cookie from "js-cookie"

const useCart = () => {
    const { checkoutCookie } = useApiProvider()
    const hook = useHook((hooks: ApiHooks) => hooks.cart.useCart)

    const fetcherWrapper = (context) =>{
        context.input.checkoutId = Cookie.get(checkoutCookie)
        return hook.fetcher(context)
    }

    return useSWRhook({...hook, fetcher: fetcherWrapper})
}

export default useCart