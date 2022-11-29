import React, {useEffect, useState} from 'react';
import {Avatar} from "@mui/material";
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './MainNavigation.module.css'
import {NavLink, useNavigate} from "react-router-dom";
import {logout, useAuth} from "../../store/firebase";
import edit from '../../assets/images/edit.png'
import Imglogout from '../../assets/images/logout.png'
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../store/index";

const MainNavigation = () => {
        const currentUser = useAuth();
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const isLoggedIn = useSelector((state) => state.isLoggedIn);
        const photoURL = useSelector((state) => state.photoURL);
        const [open, setOpen] = useState(false);

        useEffect(() => {

            dispatch(authActions.updatePhoto(''));
            if (currentUser?.photoURL) {
                dispatch(authActions.updatePhoto(currentUser.photoURL));
            }

        }, [currentUser]);

        const editProfileHandler = () => {
            navigate('/profile')
            setOpen(false);
        }

        const logoutHandler = async () => {
            try {
                await logout();
                dispatch(authActions.logout());
                setOpen(prevState => !prevState);
            } catch (e) {
                alert(e.message)
            }
        }

        const changeVisibility = () => {
            setOpen((prevState => !prevState));
        }

        return (
            <div>
                <header className={styles.header}>
                    <div className={styles.logo}>Product Store</div>
                    <nav className={styles.nav}>
                        <ul>
                            {!isLoggedIn &&
                            <li>
                                <NavLink
                                    className={(navData) => (navData.isActive ? styles.active : '')}
                                    to={'/auth'}
                                >
                                    Login
                                </NavLink>
                            </li>}
                            {isLoggedIn &&
                            <li>
                                <NavLink
                                    className={(navData) => (navData.isActive ? styles.active : '')}
                                    to={'/products'}
                                >
                                    Products
                                </NavLink>
                            </li>}

                            {isLoggedIn &&
                            <li>
                                <NavLink
                                    className={(navData) => (navData.isActive ? styles.active : '')}
                                    to={'/customers'}
                                >
                                    Customers
                                </NavLink>
                            </li>}
                            {isLoggedIn &&
                            <li>
                                <NavLink
                                    className={(navData) => (navData.isActive ? styles.active : '')}
                                    to={'/orders'}
                                >
                                    Orders
                                </NavLink>
                            </li>}

                            {isLoggedIn && <li>
                                <Avatar style={{cursor: 'pointer'}} src={photoURL} onClick={changeVisibility}/>
                            </li>}
                        </ul>
                    </nav>
                </header>
                {isLoggedIn &&
                <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
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
