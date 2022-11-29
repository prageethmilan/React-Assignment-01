import React from 'react';
import styles from './AddItemForm.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const AddItemForm = (props) => {
    return (
        <div className={styles.itemForm}>
            <h1 className={'text-center mb-3'}>Add Item</h1>
            <form>
                <div className={'mb-2'}>
                    <label className={'form-label mb-1 fw-bolder'} htmlFor={'itemId'}>Item ID</label>
                    <input className={'form-control'} type={'text'} id={'itemId'} required />
                </div>
                <div className={'mb-2'}>
                    <label className={'form-label mb-1 fw-bolder'} htmlFor={'title'}>Title</label>
                    <input className={'form-control'} type={'text'} id={'title'} required />
                </div>
                <div className={'mb-2'}>
                    <label className={'form-label mb-1 fw-bolder'} htmlFor={'price'}>Price</label>
                    <input className={'form-control'} type={'number'} id={'price'} required />
                </div>
                <div className={'mb-2'}>
                    <label className={'form-label mb-1 fw-bolder'} htmlFor={'quantity'}>Quantity</label>
                    <input className={'form-control'} type={'number'} id={'quantity'} required />
                </div>
                <div className={'mb-3'}>
                    <label className={'form-label mb-1 fw-bolder'} htmlFor={'description'}>Description</label>
                    <textarea className={'form-control'}  id={'description'} required />
                </div>
                <div className={'modal-footer d-flex align-items-center justify-content-around'}>
                    <button type={'submit'} className={'btn btn-primary'}>Save Item</button>
                    <button className={'btn btn-secondary'}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddItemForm;
