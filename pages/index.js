import React from 'react'
import Styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

const index = () => {
    return (
        <div className={Styles.container}>
            <Head>
                <title>Farhan Rafly Fahrezi</title>
            </Head>
            <div className={Styles.main}>
                <h1 className={Styles.title}>Farhan Rafly Fahrezi S</h1>
                <ul>
                    <li>
                        <LinkComponent href='/aboutme'>About Me</LinkComponent>
                    </li>
                    <li>
                        <LinkComponent href='/social/static'>
                            Social Media Static
                        </LinkComponent>
                    </li>
                    <li>
                        <LinkComponent href='/social/server'>
                            Social Media Server
                        </LinkComponent>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const LinkComponent = ({ href, children }) => {
    return (
        <Link href={href}>
            <a>{children}</a>
        </Link>
    )
}

export default index
