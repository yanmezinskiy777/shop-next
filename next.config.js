const withCustomFramework = require("./framework/common/config")

module.exports = withCustomFramework({
  framework:{
    name: "shopify_local"
  },
  reactStrictMode: true,
})

console.log("next.config", JSON.stringify(module.exports, null, 2))