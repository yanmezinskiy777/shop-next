
import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import s from "./Button.module.css"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode | ReactNode[];
}

const Button: FC<Props> = ({ children, className, ...rest }) => {
    return (
        <button className={[s.root, className].join(" ")}
         type="button"
          {...rest}
        >
            {children}
        </button>
    )
}

export default Button
