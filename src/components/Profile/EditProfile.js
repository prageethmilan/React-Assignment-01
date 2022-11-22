import React, {useState} from 'react';
import styles from "../Profile/EditProfile.module.css";
import {upload, useAuth} from "../../store/firebase";
import {useNavigate} from 'react-router-dom';

const EditProfile = (props) => {
    const navigate = useNavigate();
    const currentUser = useAuth();
    const [photo, setPhoto] = useState(null);

    const imageChangeHandler = (e) => {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0]);
        }
    }

    const uploadImageHandler = async () => {
        try {
            await upload(photo, currentUser)
            navigate('/products')
        } catch (e) {
            alert(e.message)
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
        </section>
    );
};

export default EditProfile;
