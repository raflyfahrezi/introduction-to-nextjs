import React from 'react'
import Head from 'next/head'
import Styles from '../../styles/Home.module.css'

const server = ({ response }) => {
    return (
        <div className={Styles.container}>
            <Head>
                <title>Social Media Server</title>
            </Head>
            <div className={Styles.main}>
                <h1 className={Styles.title}>Social Media Server</h1>
                <ul>
                    {response.map((item, index) => {
                        return <li key={index}>{item.name}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const data = await fetch(
        'https://project-dummy-521bb-default-rtdb.firebaseio.com/socialMedia.json'
    )
    const parsed = await data.json()

    return {
        props: {
            response: parsed,
        },
    }
}

export default server
