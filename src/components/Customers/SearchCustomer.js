import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchCustomer = () => {
    return (
        <div className={'col-12 col-md-5'}>
            <div className="shadow-sm pt-3 pb-5 px-3 py-3 mt-2">

                <div className="mb-3">
                    <label className="form-label" htmlFor="txtSearchCusID">Search Customer</label>
                    <input className="form-control" id="txtSearchCusID" placeholder="Customer ID, NIC, Name"
                           type="text"/>
                </div>
                <button className="btn btn-primary me-3" id="btnSearch">Search</button>
                <button className={'btn btn-secondary'}>Clear</button>
            </div>
        </div>
    );
};

export default SearchCustomer;
