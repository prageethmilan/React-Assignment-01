import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerService from "../../service/CustomerService";

const CustomerTable = () => {
    const [customers, setCustomers] = useState([]);

    const loadCustomers = async () => {
        let res = await CustomerService.getCustomers();
        setCustomers(res.data.customers);
    };

    useEffect(() => {
        loadCustomers();
    }, [])

    return (
        <div className={'col'}>
            <table className="table table-hover">
                <thead className="bg-danger text-white">
                <tr>
                    <th>Customer ID</th>
                    <th>Customer Name</th>
                    <th>Customer Address</th>
                    <th>Customer Salary</th>
                </tr>
                </thead>
                <tbody>
                {
                    customers.map(customer => {
                        return <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.address}</td>
                            <td>{customer.salary}</td>
                        </tr>;
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default CustomerTable;
