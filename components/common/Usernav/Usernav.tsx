

import React from 'react'
import Link from "next/link"
import style from "./Usernav.module.css"
import { Heart, Bag as Cart } from "@components/icons"
import { useUi } from "@components/context/Provider"
import { useCart } from '@common/cart'

const Usernav = () => {
    const cart = useCart()
    debugger
    const ui = useUi()
    return (
        <ul className={style.list}>
            <li className={style.item}>
                <Cart onClick={ui.onOpenSideBar} />
            </li>
            <li className={style.item}>
                <Link href="/wishlist">
                    <a>
                      <Heart />
                    </a>
                </Link>
            </li>
        </ul>
    )
}

export default Usernav
