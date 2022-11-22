import React, {useContext, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import styles from './Auth.module.css'
import AuthContext from "../../store/auth-context";
import {login, signup} from "../../store/firebase";

const Auth = (props) => {
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();


    const [isLogin, setIsLogin] = useState(true);

    const switchAuthModeHandler = () => {
        setIsLogin(prevState => !prevState);
    }

    const submitFormHandler = (event) => {
        event.preventDefault();

        if (isLogin) {
            signInUserHandler()
        } else {
            signupUserHandler();
        }
    }

    const signInUserHandler = async () => {
        try {
            const data = await login(emailInputRef.current.value, passwordInputRef.current.value);
            if (data) {
                authCtx.login(data.user.uid);
                navigate('/products');
            }
        } catch (e) {
            alert(e.message)
        }
    }

    const signupUserHandler = async () => {
        try {
            const data = await signup(emailInputRef.current.value, passwordInputRef.current.value);
            if (data) {
                alert('Account Registered Successfully');
                emailInputRef.current.value = '';
                passwordInputRef.current.value = '';
            }
        } catch (e) {
            alert(e.message)
            // console.log(e);
        }
    }

    return (
        <section className={styles.auth}>
            <h1>{isLogin ? 'Login' : 'Signup'}</h1>
            <form onSubmit={submitFormHandler}>
                <div className={styles.control}>
                    <label htmlFor={'email'}>Your Email</label>
                    <input type={'email'} id={'email'} required ref={emailInputRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor={'password'}>Your Password</label>
                    <input type={'password'} id={'password'} required ref={passwordInputRef}/>
                </div>
                <div className={styles.actions}>
                    <button type={"submit"}>{isLogin ? 'Login' : 'Create Account'}</button>
                    <button type={"button"} className={styles.toggle} onClick={switchAuthModeHandler}>
                        {isLogin ? 'Create New Account' : 'Login With Existing Account'}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Auth;
