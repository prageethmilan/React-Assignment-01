import React from 'react';
import {Avatar} from "@mui/material";
import styles from './MainNavigation.module.css'

const MainNavigation = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Assignment 01</div>
            <nav className={styles.nav}>
                <ul>
                    <li>Login</li>
                    <li>Home</li>
                    <li>
                        <Avatar/>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
