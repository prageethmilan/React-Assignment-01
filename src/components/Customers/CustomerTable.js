import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerTable = () => {
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
                <tbody id="customerTable">


                </tbody>
            </table>
        </div>
    );
};

export default CustomerTable;
