
import React, { FC } from 'react'
import { Footer, Navbar } from "@components/common"
import { Sidebar } from "@components/common/ui"
import { CartSidebar } from "@components/cart"
import style from "@assets/Layout.module.css"
import { useUi } from "@components/context/Provider"
import { ApiProvider } from "@framework"

const Layout: FC = ({ children }) => {
    const ui = useUi();
    console.log(ui)
    return (
        <>
        <ApiProvider>
            <div className={style.root}>
                <Navbar />
                <Sidebar openSidebar={ui.isOpenSideBar} onClose={ui.onCloseSideBar}>
                    <CartSidebar />
                </Sidebar>
                <main className="fit">
                    {children}
                </main>
                <Footer />
            </div>
        </ApiProvider>
         </>
    )
}

export default Layout
