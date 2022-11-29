import React from 'react';
import AddCustomerForm from "../components/Customers/AddCustomerForm";
import SearchCustomer from "../components/Customers/SearchCustomer";
import CustomerTable from "../components/Customers/CustomerTable";

const CustomersPage = () => {
    return (
        <div className={'container-fluid mt-3'}>
            <div className={'row justify-content-around'}>
                <SearchCustomer/>
                <AddCustomerForm/>
            </div>
            <div className={'row mt-3'}>
                <CustomerTable/>
            </div>
        </div>
    );
};

export default CustomersPage;
