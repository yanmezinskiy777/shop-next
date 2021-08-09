

import React from 'react'
import Link from "next/link"
import style from "./Usernav.module.css"
import { Heart, Bag as Cart } from "@components/icons"

const Usernav = () => {
    return (
        <ul className={style.list}>
            <li className={style.item}>
                <Cart />
            </li>
            <li className={style.item}>
                <Link href="/">
                    <a>
                      <Heart />
                    </a>
                </Link>
            </li>
        </ul>
    )
}

export default Usernav
