const path = require("path")
const fs = require("fs")
const merge = require("deepmerge")
const prettier = require("prettier")

function withCustomFramework( defaultConfig = {} ) {
    let framework = defaultConfig?.framework?.name

    const ALLOW_FW = ['shopify', 'bigcommerce', 'shopify_local']
    const FALLBACK_FW = 'shopify'

    if(!framework){
        throw new Error('Framework name does not exist!')
    }
    
    if(!ALLOW_FW.includes(framework)){
        throw new Error(`${framework} does not allow by this app.`)
    }

    if(framework === 'shopify_local'){
        framework = FALLBACK_FW
    }

    const frameworkNextConfig = require(path.join("../", framework, "/" ,"next.config"))

    const pathTsConfig = path.join(process.cwd(), "tsconfig.json")
    const tsConfig = require(pathTsConfig)

    tsConfig.compilerOptions.paths["@framework"] = [`framework/${framework}`]
    tsConfig.compilerOptions.paths["@framework/*"] = [`framework/${framework}/*`]

    fs.writeFileSync(pathTsConfig, prettier.format(JSON.stringify(tsConfig), { parser: 'json'}))
    
    return merge(defaultConfig, frameworkNextConfig)
}

module.exports = withCustomFramework