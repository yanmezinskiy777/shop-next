import { Product } from "@common/types/products"

type Choises = "size" | "color" | string

export type StateChoises = {
    [P in Choises]: string
}

export const getVariant = (product: Product, choises: StateChoises) => {
   return product.variants.find(cur => {
      return cur.options.every(option => {
            const optName = option.displayName.toLowerCase()
            const label = option.values[0]?.label.toLowerCase();
            const choise = choises[optName]?.toLowerCase()
            if(label === choise){
                return true
            }
            return false
        })
    }) 
}