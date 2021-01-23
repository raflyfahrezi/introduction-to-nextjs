import React from 'react'
import Styles from '../styles/Home.module.css'

const aboutme = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.main}>
                <h1 className={Styles.title}>About Me</h1>
                <p>
                    Perkenalkan nama saya Farhan dan saya mahasiswa semester 5
                    di UNIKOM
                </p>
            </div>
        </div>
    )
}

export default aboutme
