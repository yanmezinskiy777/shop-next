const withCustomFramework = require("./framework/common/config")

module.exports = withCustomFramework({
  framework:{
    name: process.env.NEXT_PUBLIC_FRAMEWORK
  },
  reactStrictMode: true,
})

//console.log("next.config", JSON.stringify(module.exports, null, 2))