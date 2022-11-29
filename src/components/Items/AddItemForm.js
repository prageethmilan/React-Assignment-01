import React, {useEffect, useState} from 'react';
import styles from './AddItemForm.module.css'
import {useParams} from "react-router-dom";
import NotFound from "../../pages/NotFound";

const AddItemForm = (props) => {
    const params = useParams();
    const {status} = params;
    const [isExists, setIsExists] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        if (status === 'add') {
            setIsExists(true)
            setText('Add');
        } else if (status === 'update') {
            setIsExists(true);
            setText('Update');
        } else {
            setIsExists(false);
        }
    }, [isExists]);

    return (
        <div>
            {!isExists ? <NotFound/> :
                <div className={styles.itemForm}>
                    <h1 className={'text-center mb-3'}>{text} Item</h1>
                    <form>
                        <div className={'mb-2'}>
                            <label className={'form-label mb-1 fw-bolder'} htmlFor={'itemId'}>Item ID</label>
                            <input className={'form-control'} type={'text'} id={'itemId'} required/>
                        </div>
                        <div className={'mb-2'}>
                            <label className={'form-label mb-1 fw-bolder'} htmlFor={'title'}>Title</label>
                            <input className={'form-control'} type={'text'} id={'title'} required/>
                        </div>
                        <div className={'mb-2'}>
                            <label className={'form-label mb-1 fw-bolder'} htmlFor={'price'}>Price</label>
                            <input className={'form-control'} type={'number'} id={'price'} required/>
                        </div>
                        <div className={'mb-2'}>
                            <label className={'form-label mb-1 fw-bolder'} htmlFor={'quantity'}>Quantity</label>
                            <input className={'form-control'} type={'number'} id={'quantity'} required/>
                        </div>
                        <div className={'mb-3'}>
                            <label className={'form-label mb-1 fw-bolder'} htmlFor={'description'}>Description</label>
                            <textarea className={'form-control'} id={'description'} required/>
                        </div>
                        <div className={'modal-footer d-flex align-items-center justify-content-around'}>
                            <button type={'submit'} className={'btn btn-primary'}>{text} Item</button>
                            <button className={'btn btn-secondary'}>Cancel</button>
                        </div>
                    </form>
                </div>
            }
        </div>
    );
};

export default AddItemForm;
