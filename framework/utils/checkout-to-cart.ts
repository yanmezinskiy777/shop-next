import { Checkout } from "@framework/schema"
import { normalizeCart } from "./normalize"


const checkoutToCart = (checkout: Checkout) => {
    if(!checkout){
        throw new Error("Checkout doesn't exist!")
    }
    return normalizeCart(checkout)
}

export default checkoutToCart