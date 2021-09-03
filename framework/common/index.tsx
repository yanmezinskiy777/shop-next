import React, { ReactNode, createContext, useContext, useMemo } from "react"
import {  ApiConfig, ApiContextValues } from "./types/config"
import { ApiHooks } from "./types/hooks"

interface ApiProviderProps {
    children: ReactNode | ReactNode[]
    config: ApiConfig
    hooks: ApiHooks
}

const ApiContext = createContext<Partial<ApiContextValues>>({})

export const ApiProvider = ({ children, config, hooks } : ApiProviderProps) => {

    const configCore = useMemo(() => {
        return {
            fetcher: config.fetch,
            hooks,
            checkoutCookie: config.checkoutCookie
        }
    },[config.fetch, hooks, config.checkoutCookie])

    return(
       
            <ApiContext.Provider value={configCore}>
               {children}
            </ApiContext.Provider>
    
    )
}

export const useApiProvider = () => useContext(ApiContext)

