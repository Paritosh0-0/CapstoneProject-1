import React from 'react'
import SignupForm from '../signupform/SignupForm'
import styles from './formAuth.module.css'

function FormAuth() {
    return (
        <div className={styles.formAuth}>
            <div className={styles.formAuthWrapper}>
                <div className={styles.title}>Super App</div>
                <div className={styles.subHeading}>Create your new account</div>
                <div className={styles.optionsWrapper}>
                    <div className={styles.options}>Email</div>
                    |
                    <div className={styles.options}>Google</div>
                </div>
                <SignupForm />
                <div className={styles.description}>By clicking on Sign up. you agree to <span>Superapp Terms and Conditions of Use</span></div>
                <div className={styles.description}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></div>
            </div>
        </div>
    )
}

export default FormAuth