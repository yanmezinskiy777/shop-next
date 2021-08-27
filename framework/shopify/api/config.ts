
import { ConfigParams } from "@common/types/config";
import { fetchApi } from "../../utils"

class Config{

    private config: any;

    constructor(config: any){
        this.config = config
    }

    getConfig(): ConfigParams{
        return this.config
    }
}

const confWrapper = new Config({
    apiUrl: 'http://localhost:4000/graphql',
    fetch: fetchApi
})

export function getConfig(){
    return confWrapper.getConfig()
}