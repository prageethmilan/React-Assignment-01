import React, {useState} from 'react';
import styles from "../Profile/EditProfile.module.css";
import {upload, useAuth} from "../../store/firebase";
import LoadingSpinner from "../UI/LoadingSpinner";
import {useDispatch} from "react-redux";
import {authActions} from "../../store/index";

const EditProfile = (props) => {
    const dispatch = useDispatch();
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
                dispatch(authActions.updatePhoto(photoURL));
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
