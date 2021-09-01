export const APP_CONST =
  process.env.NEXT_PUBLIC_FRAMEWORK === "shopify_local"
    ? process.env.NEXT_PUBLIC_LOCAL_SHOP_DOMAIN
    : process.env.NEXT_PUBLIC_PROD_SHOP_DOMAIN;

export const SHOPIFY_CHECKOUT_ID_COOKIE =
  process.env.NEXT_PUBLIC_FRAMEWORK === "shopify_local"
    ? "shopify_local_checkoutId"
    : "shopify_checkoutId";
