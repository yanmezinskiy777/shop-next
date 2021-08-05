

import React, { FC, ReactNode } from 'react'
import style from "./Grid.module.css"

interface Props{
    children: ReactNode[],
    layout?: "A" | "B" 
}

const Grid: FC<Props> = ({ children, layout = "A" }) => {

    const rootClass = layout === "B" ? style.layoutB : style.layoutA

    return (
        <div className={[style.root, rootClass].join(" ")}>
            {children}
        </div>
    )
}

export default Grid
