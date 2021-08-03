
import { FetchResult, FetchParams } from "@common/types/config"

const fetchApi = async <T>({ apiUrl, query } : FetchParams): Promise<FetchResult<T>> => {
    
    const res = await fetch(apiUrl, {
        method: "POST",
        headers:{
            "Content-type" : "application/json"
        },
        body: JSON.stringify({
            query
        })
    })
    const { data, errors } = await res.json() 

    if(errors){
        throw new Error(errors[0].message ?? errors.message)
    }

    return { data }
}

export default fetchApi