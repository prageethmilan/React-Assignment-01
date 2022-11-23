import React, {useContext, useState} from 'react';
import styles from "../Profile/EditProfile.module.css";
import {upload, useAuth} from "../../store/firebase";
import AuthContext from "../../store/auth-context";
import LoadingSpinner from "../UI/LoadingSpinner";

const EditProfile = (props) => {
    const authCtx = useContext(AuthContext);
    const currentUser = useAuth();
    const [photo, setPhoto] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const imageChangeHandler = (e) => {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0]);
        }
    }

    const uploadImageHandler = async () => {
        if (photo !== null) {
            try {
                const photoURL = await upload(photo, currentUser, setIsLoading)
                authCtx.updatePhoto(photoURL);
                setPhoto(null);
            } catch (e) {
                alert(e.message)
            }
        } else {
            alert("Select an image")
        }
    }


    return (
        <section className={styles.profile}>
            <h1>My Profile</h1>
            <div className={styles.control}>
                <label htmlFor={'image'}>Image</label>
                <input type={'file'} id={'image'} onChange={imageChangeHandler} required/>
            </div>
            <div className={styles.actions}>
                <button type={"submit"} onClick={uploadImageHandler}>Update</button>
            </div>
            {isLoading && <LoadingSpinner/>}
        </section>
    );
}

export default EditProfile;
