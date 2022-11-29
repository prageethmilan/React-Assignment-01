import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddCustomerForm = () => {
    return (
        <div className={'col-12 col-md-5'}>
            <form>
                <div className={'mb-2'}>
                    <label className={'form-label mb-1 fw-bolder'} htmlFor={'customerId'}>Customer ID</label>
                    <input className={'form-control'} type={'text'} id={'customerId'} required />
                </div>
                <div className={'mb-2'}>
                    <label className={'form-label mb-1 fw-bolder'} htmlFor={'name'}>Name</label>
                    <input className={'form-control'} type={'text'} id={'name'} required />
                </div>
                <div className={'mb-2'}>
                    <label className={'form-label mb-1 fw-bolder'} htmlFor={'address'}>Address</label>
                    <input className={'form-control'} type={'text'} id={'address'} required />
                </div>
                <div className={'mb-2'}>
                    <label className={'form-label mb-1 fw-bolder'} htmlFor={'salary'}>Salary</label>
                    <input className={'form-control'} type={'number'} id={'salary'} required />
                </div>
                <div className={'modal-footer d-flex align-items-center justify-content-around'}>
                    <button type={'submit'} className={'btn btn-primary'}>Save Customer</button>
                    <button className={'btn btn-secondary'}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddCustomerForm;
