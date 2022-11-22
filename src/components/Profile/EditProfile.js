import React from 'react';
import styles from "../Profile/EditProfile.module.css";

const EditProfile = (props) => {


    return (
        <section className={styles.profile}>
            <h1>My Profile</h1>
            <form>
                <div className={styles.control}>
                    <label htmlFor={'image'}>Image</label>
                    <input type={'file'} id={'image'} required/>
                </div>
                <div className={styles.actions}>
                    <button type={"submit"}>Update</button>
                </div>
            </form>
        </section>
    );
};

export default EditProfile;
