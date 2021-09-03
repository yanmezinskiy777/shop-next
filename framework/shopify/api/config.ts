
import { FetchParams } from "@common/types/config";
import { fetchApi } from "../../utils"
import { SHOPIFY_CHECKOUT_ID_COOKIE } from "@framework/const"

class Config{

    private config: any;

    constructor(config: any){
        this.config = config
    }

    getConfig(): FetchParams{
        return this.config
    }
}

const confWrapper = new Config({
    fetch: fetchApi,
    checkoutCookie: SHOPIFY_CHECKOUT_ID_COOKIE
})

export function getConfig(){
    return confWrapper.getConfig()
}