import React, {useContext, useEffect, useState} from 'react';
import {Avatar} from "@mui/material";
import styles from './MainNavigation.module.css'
import AuthContext from "../../store/auth-context";
import {NavLink, useNavigate} from "react-router-dom";
import {logout, useAuth} from "../../store/firebase";
import edit from '../../assets/images/edit.png'
import Imglogout from '../../assets/images/logout.png'

const MainNavigation = () => {
        const currentUser = useAuth();
        const navigate = useNavigate();
        const authCtx = useContext(AuthContext);
        const [open, setOpen] = useState(false);

        let src = '';

        useEffect(() => {
            src = currentUser?.photoURL;
        }, [currentUser])

        const editProfileHandler = () => {
            navigate('/profile')
            setOpen(false);
        }

        const logoutHandler = async () => {
            try {
                await logout();
                authCtx.logout();
                // navigate('/')
            } catch (e) {
                alert(e.message)
            }
        }

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
                                <Avatar style={{cursor: 'pointer'}} src={src} onClick={() => setOpen(!open)}/>
                            </li>}
                        </ul>
                    </nav>
                </header>
                {authCtx.isLoggedIn &&
                <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                    {/*<h3>The Kiet<br/><span>Website Designer</span></h3>*/}
                    <small>Logged in as :- </small>
                    <small><b>{currentUser?.email}</b></small>
                    <ul>
                        <DropdownItem
                            action={editProfileHandler}
                            img={edit}
                            text={"Edit Profile"}
                        />
                        <DropdownItem action={logoutHandler} img={Imglogout} text={"Logout"}/>
                    </ul>
                </div>}
            </div>
        );
    }
;

function DropdownItem(props) {
    return (
        <li className={styles.dropdownItem} onClick={props.action}>
            <img src={props.img} alt={''}/>
            <a> {props.text} </a>
        </li>
    );
}

export default MainNavigation;
