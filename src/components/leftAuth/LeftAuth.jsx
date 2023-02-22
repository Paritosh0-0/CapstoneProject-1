import React from 'react'

import bg from '../../assets/images/bg.png'
import styles from './leftAuth.module.css'

function LeftAuth() {
    return (
        <div className={styles.leftAuthContainer}>
            <img src={bg} alt='background' />
            <div className={styles.textWrapper}>
                <div className={styles.topText}>
                    <div>Already have an account?</div>
                    <div className={styles.loginBtn}>Login</div>
                </div>
                <div className={styles.bottomText}>
                    <div>Discover new things on Superapp</div>
                </div>
            </div>
        </div>
    )
}

export default LeftAuth