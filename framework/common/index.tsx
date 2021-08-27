import React, { ReactNode, createContext, useContext, useMemo } from "react"
import { ConfigParams, ApiHooks, ApiContextValues } from "./types/config"

interface ApiProviderProps {
    children: ReactNode | ReactNode[]
    config: ConfigParams
    hooks: ApiHooks
}

const ApiContext = createContext<Partial<ApiContextValues>>({})

export const ApiProvider = ({ children, config, hooks } : ApiProviderProps) => {

    const configCore = useMemo(() => {
        return {
            fetcher: config.fetch,
            hooks
        }
    },[config.fetch, hooks])

    return(
       
            <ApiContext.Provider value={configCore}>
               {children}
            </ApiContext.Provider>
    
    )
}

export const useApiProvider = () => useContext(ApiContext)

