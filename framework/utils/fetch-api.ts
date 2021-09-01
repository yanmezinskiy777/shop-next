
import { FetchResult, FetchParams } from "@common/types/config"
import { APP_CONST } from "@framework/const"

const fetchApi = async <T>({ query, variables } : FetchParams): Promise<FetchResult<T>> => {
    
    const res = await fetch(APP_CONST, {
        method: "POST",
        headers:{
            "Content-type" : "application/json"
        },
        body: JSON.stringify({
            query,
            variables
        })
    })
    const { data, errors } = await res.json() 

    if(errors){
        throw new Error(errors[0].message ?? errors.message)
    }

    return { data }
}

export default fetchApi