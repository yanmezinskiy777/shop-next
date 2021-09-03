import { checkoutDetailFragment } from "../common/common"

const checkoutLineItemsAdd = `
mutation(
    $checkoutId: ID!,
    $lineItems: [CheckoutLineItemInput!]! ) {
    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
      checkoutUserErrors {
        field
        message
      }
      checkout {
        ${checkoutDetailFragment}
      }
    }
  }
`;

export default checkoutLineItemsAdd;
