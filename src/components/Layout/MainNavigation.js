import React, {useContext, useEffect, useState} from 'react';
import {Avatar} from "@mui/material";
import styles from './MainNavigation.module.css'
import AuthContext from "../../store/auth-context";
import {NavLink} from "react-router-dom";
import {useAuth} from "../../store/firebase";
import edit from '../../assets/images/edit.png'
import logout from '../../assets/images/logout.png'

const MainNavigation = () => {
    const currentUser = useAuth();

    const authCtx = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    let src = '';

    useEffect(() => {
        if (currentUser !== undefined) {
            if (currentUser.photoURL !== null) {
                src = currentUser.photoURL;
            }
        }
    }, [currentUser])

    return (
        <div>
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
                            <Avatar src={src} onClick={setOpen(!open)}/>
                        </li>}
                    </ul>
                </nav>
            </header>
            <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                <h3>The Kiet<br/><span>Website Designer</span></h3>
                <ul>
                    <DropdownItem img={edit} text={"Edit Profile"}/>
                    <DropdownItem img={logout} text={"Logout"}/>
                </ul>
            </div>
        </div>
    );
};

function DropdownItem(props){
    return(
        <li className = 'dropdownItem'>
            <img src={props.img} alt={''} />
            <a> {props.text} </a>
        </li>
    );
}

export default MainNavigation;
