
import React from 'react'
import { Container } from "@components/common/ui"
import Link from "next/link"
import { Usernav } from "@components/common"
import style from "./Navbar.module.css"

const Navbar = () => {
    return (
       <Container>
           <div className="">
               <div className={style.container}>
                    <Link href="/">
                        <a className={style.logo}>
                            <h1>
                                STORE
                            </h1>
                        </a>
                    </Link>
                    <nav className="space-x-6 ml-6">
                        <Link href="/">
                            <a className={style.link}>
                                   All
                            </a>
                        </Link>
                        <Link href="/clothes">
                            <a className={style.link}>
                                   Clothes
                            </a>
                        </Link>
                        <Link href="/shoes">
                            <a className={style.link}>
                                   Shoes
                            </a>
                        </Link>
                        <Link href="/accessorise">
                            <a className={style.link}>
                                   Accessorise
                            </a>
                        </Link>
                    </nav>
                    <div className="flex flex-1 justify-end space-x-8">
                        <Usernav />
                    </div>
               </div>
           </div>
       </Container>
    )
}

export default Navbar
