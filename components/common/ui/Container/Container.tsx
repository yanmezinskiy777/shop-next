

import React,{ FC, ReactNode, HTMLAttributes, ComponentType } from 'react'
import style from "./Container.module.css"

interface Props {
    children: ReactNode | ReactNode[]
    el?: ComponentType<HTMLAttributes<HTMLElement>>
}

const Container: FC<Props> = ({ children, el: Component = "div" }) => {
    return (
        <Component className={style.root}>
            {children}
        </Component>
    )
}

export default Container
