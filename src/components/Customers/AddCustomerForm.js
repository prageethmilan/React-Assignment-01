import React, {useRef, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerService from "../../service/CustomerService";

let regCustomerId = new RegExp("^(C-)[0-9]{3}");
let regCustomerName = new RegExp("^[A-z 0-9.]{3,}");
let regCustomerAddress = new RegExp("^[A-z 0-9.]{3,}");
let regCustomerSalary = new RegExp("^[0-9]{1,}([.][0-9]{2})?");

const AddCustomerForm = () => {

    const customerIdRef = useRef();
    const customerNameRef = useRef();
    const customerAddressRef = useRef();
    const customerSalaryRef = useRef();
    const [isDisabled, setIsDisabled] = useState(true);

    const searchCustomer = async (event) => {
        if (event.key === 'Enter'){
            setIsDisabled(false);
            if (regCustomerId.test(customerIdRef.current.value)){
                let params = {
                    id: customerIdRef.current.value
                }
                let res = await CustomerService.searchCustomer(params);
                console.log(res)
            } else {
                alert('Customer ID is a required field.Pattern C-001')
            }
        }
    }

    const resetAllData = () => {
        customerIdRef.current.value = ''
        customerNameRef.current.value = ''
        customerAddressRef.current.value = ''
        customerSalaryRef.current.value = ''
        setIsDisabled(true);
    }

    return (
        <div className={'col-12 col-md-6'}>
            <h1 className="h1 mb-3">Customer Manage</h1>
            <form>
                <div className={'mb-2'}>
                    <label className={'form-label mb-1 fw-bolder'} htmlFor={'customerId'}>Customer ID</label>
                    <input className={'form-control'} type={'text'} id={'customerId'} required ref={customerIdRef} onKeyDown={searchCustomer}/>
                </div>
                <div className={'mb-2'}>
                    <label className={'form-label mb-1 fw-bolder'} htmlFor={'name'}>Name</label>
                    <input className={'form-control'} type={'text'} id={'name'} required ref={customerNameRef}/>
                </div>
                <div className={'mb-2'}>
                    <label className={'form-label mb-1 fw-bolder'} htmlFor={'address'}>Address</label>
                    <input className={'form-control'} type={'text'} id={'address'} required ref={customerAddressRef}/>
                </div>
                <div className={'mb-2'}>
                    <label className={'form-label mb-1 fw-bolder'} htmlFor={'salary'}>Salary</label>
                    <input className={'form-control'} type={'number'} id={'salary'} required ref={customerSalaryRef}/>
                </div>
            </form>
            <div className={'modal-footer d-flex align-items-center justify-content-around'}>
                <button type={'submit'} className={'btn btn-primary'} disabled={!isDisabled}>Save Customer</button>
                <button type={'submit'} className={'btn btn-success'} disabled={isDisabled}>Update Customer</button>
                <button className={'btn btn-secondary'} onClick={resetAllData}>Cancel</button>
            </div>
        </div>
    );
};

export default AddCustomerForm;
