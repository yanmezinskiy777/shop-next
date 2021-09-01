

import { useAddItem } from "@common/cart"
import { MutationHook } from "@common/types/hooks"
import getCheckoutId from "../../utils/get-checkout-id"

export default useAddItem 

export const handler: MutationHook = {
    fetcherOptions:{
        query: `query { hello }`
    },
    fetcher: async ({options, fetch, input}) => {

        const variables = {
            checkoutId: getCheckoutId(),
            lineItems: [
            {
            variantId: input.variantId,
            quantity: 1
            }
        ]
        }

        const response = await fetch({
           ...options,
            variables
        })
        return response
    },
    useHook: ({fetch}: any) => {
        return async (input: any) => {
            const response = await fetch(input)
            return{
                output: response 
            }
        }
    }
}