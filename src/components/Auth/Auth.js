import React from 'react';
import styles from './Auth.module.css'

const Auth = (props) => {
    return (
        <section className={styles.auth}>
            <h1>Login</h1>
            <form>
                <div className={styles.control}>
                    <label htmlFor={'email'}>Your Email</label>
                    <input type={'email'} id={'email'} required />
                </div>
                <div className={styles.control}>
                    <label htmlFor={'password'}>Your Password</label>
                    <input type={'password'} id={'password'} required />
                </div>
                <div className={styles.actions}>
                    <button>Login</button>
                    <button type={"button"} className={styles.toggle}>Create New Account</button>
                </div>
            </form>
        </section>
    );
};

export default Auth;
