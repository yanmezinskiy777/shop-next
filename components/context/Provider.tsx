
import { createContext, FC, useContext, useReducer, useMemo } from "react"


interface Modifires{
    onCloseSideBar: () => void,
    onOpenSideBar: () => void
}

interface Values{
    isOpenSideBar: boolean
}

const stateModifires: Modifires = {
    onCloseSideBar: () => {},
    onOpenSideBar: () => {}
}

type ContextStates = Modifires & Values

const initalState: Values = {
    isOpenSideBar: false,
}

const Context = createContext<ContextStates>({
   ...initalState,
   ...stateModifires
})

type Action = { type: "OPEN_SIDEBAR" } | { type: "CLOSE_SIDEBAR" }

const reducer = (state: Values, action: Action) => {
    switch(action.type){
        case "OPEN_SIDEBAR": {
            return{
                ...state,
                isOpenSideBar: true
            }
        }
        case "CLOSE_SIDEBAR": {
            return{
                ...state,
                isOpenSideBar: false
            }
        }    
        default: return state
    }
}


export const Provider: FC = ({children}) => {

    const [state, dispath] = useReducer(reducer, initalState)

    console.log(state);

    const uiState: ContextStates = useMemo(() => {
        return{
            isOpenSideBar: state.isOpenSideBar,
            onCloseSideBar: () => dispath({ type: "CLOSE_SIDEBAR" }),
            onOpenSideBar: () => dispath({ type: "OPEN_SIDEBAR" })
        }
      }, [state.isOpenSideBar])

    return(
        <>
            <Context.Provider value={ uiState }>
               {children}
            </Context.Provider>
        </>
    )
}

export const useUi = () => useContext(Context)
    


