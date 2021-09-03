import { handler as useAddItem } from "@framework/cart/use-add-item"
import { handler as useCart } from "@framework/cart/use-cart"

export const shopifyHooks = {
    cart:{
        useAddItem,
        useCart
    }
}