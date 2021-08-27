import { getConfig } from "@framework/api/config"
import { ApiProvider as ApiProviderCore, useApiProvider as useApiProviderCore } from "@common"
import { ReactNode } from "react"
import { shopifyHooks } from "@framework/hooks"

const config = getConfig()

interface ApiProviderProps {
    children: ReactNode | ReactNode[]
}

export const ApiProvider = ({ children }: ApiProviderProps) => {


    return(<ApiProviderCore config={{...config}} hooks={shopifyHooks}>
        {children}
    </ApiProviderCore>)
}

export const useApiProvider = () => useApiProviderCore()