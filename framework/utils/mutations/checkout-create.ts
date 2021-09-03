import { checkoutDetailFragment } from "../common/common"

const checkoutCreate = `
mutation ($input: CheckoutCreateInput = {}) {
    checkoutCreate(input: $input) {
      checkoutUserErrors {
          field
          message
        }
        checkout {
          ${checkoutDetailFragment}
        }
    }
  }
`

export default checkoutCreate