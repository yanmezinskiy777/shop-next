
import { useCart } from "@common/cart"
import { createCheckout } from "framework/utils"

export const handler = {
    fetcherOptions:{
        query: 'query { hello }'
    },
    fetcher: async ({fetch, options, input: { checkoutId }}) => {

       let checkout

       if(checkoutId){
           const { data } = await fetch({...options})
           checkout = data.node
       } else{
          checkout = await createCheckout(fetch)
       }
       return checkout
    },
    useHook: ({useData}: any) => {
            const data = useData()
            return{
                data
            }
        }
    
}

export default useCart