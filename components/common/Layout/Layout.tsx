
import React, { FC } from 'react'
//import style from "@assets/Layout.module.css"

const Layout: FC = ({ children }) => {
    return (
        <div className={`root`}>
            <main className="fit">
                {children}
            </main>
        </div>
    )
}

export default Layout
