import React, {useContext} from 'react';
import {Avatar} from "@mui/material";
import styles from './MainNavigation.module.css'
import AuthContext from "../../store/auth-context";
import {NavLink} from "react-router-dom";

const MainNavigation = () => {

    const authCtx = useContext(AuthContext);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Product Store</div>
            <nav className={styles.nav}>
                <ul>
                    {!authCtx.isLoggedIn &&
                    <li>
                        <NavLink
                            className={(navData) => (navData.isActive ? styles.active : '')}
                            to={'/auth'}
                        >
                            Login
                        </NavLink>
                    </li>
                    }
                    {authCtx.isLoggedIn &&
                    <li>
                        <NavLink
                            className={(navData) => (navData.isActive ? styles.active : '')}
                            to={'/products'}
                        >
                            Home
                        </NavLink>
                    </li>
                    }
                    {authCtx.isLoggedIn && <li>
                        <Avatar/>
                    </li>}
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
