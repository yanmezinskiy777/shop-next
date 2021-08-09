

import React, { FC, ReactNode } from 'react'
import Ticker from "react-ticker"
import style from "./Marquee.module.css"

interface Props {
    children: ReactNode[] | ReactNode,
    variant?: "primary" | "secondary"
}

const Marquee: FC<Props> = ({ children, variant="primary" }) => {
    const rootStyle = variant === "secondary" ? style.secondary : null
    return (
        <Ticker offset="80">
            { () => 
                 <div className={[style.root, rootStyle].join(" ")}>
                         {children}
                 </div>
            }
        </Ticker>
       
    )
}

export default Marquee
