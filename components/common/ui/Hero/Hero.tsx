

import React, { FC } from 'react'
import style from "./Hero.module.css"
import Link from "next/link"
import { Container } from "@components/common/ui"

interface Props {
    headline: string,
    description: string
}

const Hero: FC<Props> = ({ headline, description }) => {
    return (
        <div className="bg-black">
            <Container>
                <div className={style.root}>
                    <h2 className={style.headline}>
                        {headline}
                    </h2>
                    <div className="flex-1">
                        <p className={style.description}>
                            {description}
                        </p>
                        <Link href="/more">
                          <a className={style.link}>Read more</a> 
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Hero
