import React, {useContext, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import styles from './Auth.module.css'
import AuthContext from "../../store/auth-context";

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
        console.log(isLogin)

        if (isLogin) {
            signInUserHandler()
        } else {
            signupUserHandler();
        }
    }

    const signupUserHandler = () => {

    }

    const signInUserHandler = () => {
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDukd84l0yXIlmrcxey4zI0PjWS5hfDA_o', {
            method: "POST",
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json();
        }).then((data) => {
            if (data.error) {
                alert(data.error.message);
            } else {
                const expirationTime = new Date(
                    new Date().getTime() + +data.expiresIn * 1000
                );
                authCtx.login(data.idToken, expirationTime.toISOString());
                navigate('/products');
            }
        })
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
