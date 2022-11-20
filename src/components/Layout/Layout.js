import React, {Fragment} from 'react';
import MainNavigation from "./MainNavigation";
import styles from './Layout.module.css'

const Layout = (props) => {
    return (
        <Fragment>
            <MainNavigation/>
            <main className={styles.layout}>{props.children}</main>
        </Fragment>
    );
};

export default Layout;
