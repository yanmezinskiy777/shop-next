
import React, { FC } from 'react'
import style from "./Swatch.module.css"
import { Check } from "@components/icons"
import { isDark } from "@lib/color"

interface Props{
    label?: string
    hexColor?: string
    active?: boolean
    variant?: "size" | "color" | string
    onClick?: () => void
}

const Swatch: FC<Props> = ({ label, hexColor, variant, active, ...rest }) => {

    label = label.toUpperCase()
    variant = variant.toLowerCase()

    const rootStyles = `${style.root}
    ${active ? style.active : ""} 
    ${hexColor ? style.color : ""} 
    ${variant === "size" ? style.size : ""}
    ${hexColor && isDark(hexColor) ? style.dark : ""}
    `

    return (
        <button {...rest} className={rootStyles} style={hexColor ? { backgroundColor: hexColor }: {}}>
             {variant === "color" && active && <span><Check/></span>}
             {variant === "size" ? label : ""}
        </button>
    )
}

export default Swatch
