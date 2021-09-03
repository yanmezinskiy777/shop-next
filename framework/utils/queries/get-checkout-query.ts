import { checkoutDetailFragment } from "../common/common"

const getCheckoutQuery = `
query($checkoutId: ID!){
    node(id: $checkoutId) {
      ... on Checkout {
        ${checkoutDetailFragment}
      }
    }
  }
`
export default getCheckoutQuery