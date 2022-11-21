import React from 'react';
import WelcomeBanner from "../../assets/images/WelcomeBanner.png";
import styles from './StartingContent.module.css'

const StartingContent = (props) => {
    return (
        <div className={styles.main}>
            <h1>Welcome to the System!</h1>
            <div className={styles.innerDiv}>
                <div className={styles.imgDiv}>
                    <img src={WelcomeBanner} alt={'Welcome Banner'}/>
                </div>
            </div>
        </div>
    );
};

export default StartingContent;
