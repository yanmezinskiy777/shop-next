import { ApiFetcher } from "@common/types/config"
import { SHOPIFY_CHECKOUT_ID_COOKIE, SHOPIFY_CHECKOUT_URL_COOKIE, SHOPIFY_COOKIE_EXPIRE } from "@framework/const"
import { Checkout, CheckoutCreatePayload, Maybe } from "@framework/schema"
import { checkoutCreate } from "../utils/mutations"
import Cookie from "js-cookie"

const createCheckout = async (fetch: ApiFetcher<{checkoutCreate: CheckoutCreatePayload}>): Promise<Maybe<Checkout | undefined>> => {

    const { data } = await fetch({
        query: checkoutCreate
    })

    const { checkout } = data.checkoutCreate
    const checkoutId = checkout?.id

    if(checkoutId){
        const options = {
            expires: SHOPIFY_COOKIE_EXPIRE
        }
        Cookie.set(SHOPIFY_CHECKOUT_ID_COOKIE, checkoutId, options)
        Cookie.set(SHOPIFY_CHECKOUT_URL_COOKIE, checkout?.webUrl, options)
    }

    debugger
    return checkout
}

export default createCheckout

