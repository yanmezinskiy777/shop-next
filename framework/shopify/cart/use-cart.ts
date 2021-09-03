import { useCart } from "@common/cart";
import { createCheckout } from "framework/utils";
import { useMemo } from "react";
import { getCheckoutQuery } from "../../utils/queries";

export const handler = {
  fetcherOptions: {
    query: getCheckoutQuery,
  },
  fetcher: async ({ fetch, options, input: { checkoutId } }) => {
    let checkout;

    if (checkoutId) {
      const { data } = await fetch({
        ...options,
        variables: {
          checkoutId,
        },
      });
      checkout = data.node;
    } else {
      checkout = await createCheckout(fetch);
    }
    return checkout;
  },
  useHook: ({ useData }: any) => {
    const data = useData({
      swrOptions:{
        revalidateOnFocus: false
      }
    });
    return useMemo(() => {
       return data
    }, [data])
  },
};

export default useCart;
