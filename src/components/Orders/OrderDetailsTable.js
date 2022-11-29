import React from 'react';

const OrderDetailsTable = () => {
    return (
        <div className="col-md-12 mt-4" style={{height:'180px', overflowY: 'scroll'}}>
            <table className="table table-bordered text-white">
                <thead className="bg-primary">
                <tr>
                    <th>Item Code</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody className="bg-light text-dark" id="orderTable">

                </tbody>
            </table>
        </div>
    );
};

export default OrderDetailsTable;
