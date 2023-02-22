import React, { useState } from 'react';
import styles from './signupForm.module.css';

function SignupForm() {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        mobile: '',
        shareData: false
    });

    const [validity, setValidity] = useState({
        name: true,
        username: true,
        email: true,
        mobile: true,
        shareData: false,
    });

    const [allValid, setAllValid] = useState(true);

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const mobileRegex = /^[0-9\b]+$/;


    const handleNameChange = (event) => {
        setFormData({ ...formData, name: event.target.value });
        setValidity({ ...validity, name: true});
    };
    const handleUsernameChange = (event) => {
        setFormData({ ...formData, username: event.target.value });
        setValidity({ ...validity, username: true});
    };
    const handleEmailChange = (event) => {
        if (emailRegex.test(event.target.value)) {
            setFormData({ ...formData, email: event.target.value });
            setValidity({ ...validity, email: true });
            setAllValid(true);
        } else {
            setAllValid(false);
            setValidity({ ...validity, email: false });
        }
    };
    const handleMobileChange = (event) => {
        if (mobileRegex.test(event.target.value)) {
            setFormData({ ...formData, mobile: event.target.value });
            setValidity({ ...validity, mobile: true });
            setAllValid(true);
        } else {
            setAllValid(false);
            setValidity({ ...validity, mobile: false });
        }
    };

    console.log(validity.name);
    console.log(validity.username)

    const handleSubmit = (event) => {
        event.preventDefault();
        if(formData.name === ''){
            setValidity({ ...validity, name: false});
            setAllValid(false);
        }
        if(formData.username === '') {
            setValidity({ ...validity, username: false });
            setAllValid(false);
        }
        if(formData.email === '') {
            setValidity({ ...validity, email: false });
            setAllValid(false);
        }
        if(formData.mobile === '') {
            setValidity({ ...validity, mobile: false });
            setAllValid(false);
        }
        
        if (allValid && validity.shareData) {
            console.log(formData);
            //send data to server..
        } else {
            window.alert('Please fill all the fields');
            console.log(validity)
        }
    };

    return (
        <>
            <form className={styles.signinWrapper} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleNameChange}
                    className={validity.name ? '' : `${styles.invalid}`}
                    />
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleUsernameChange}
                    className={validity.username ? '' : `${styles.invalid}`}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleEmailChange}
                    className={validity.email ? '' : `${styles.invalid}`}
                />
                <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile"
                    onChange={handleMobileChange}
                    inputMode="numeric"
                    maxLength={10}
                    className={validity.mobile ? '' : `${styles.invalid}`}
                />
                <div className={styles.terms}>
                    <input
                        className={styles.checkbox}
                        type="checkbox"
                        name="shareData"
                        checked={formData.shareData}
                        onChange={() => { setFormData({ ...formData, shareData: true }); setValidity({ ...validity, shareData: true }) }}
                    />
                    Share my registration data with Superapp
                </div>
                <div type="submit" className={styles.signupBtn} onClick={handleSubmit}>Sign up</div>
            </form>
        </>
    );
}

export default SignupForm;
