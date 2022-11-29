import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SelectCustomer = () => {
    return (
        <div className={'col-lg-4'}>
            <div className="card">
                <div className="card-header bg-primary fw-bolder">Invoice Details</div>
                <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="col-6">
                                <div className="mb-2">
                                    <label className={'fw-bolder fs-6'} htmlFor={'txtOrderID'}>Order ID :</label>
                                    <input className="form-control" id="txtOrderID" type="text" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-2">
                                    <label className={'fw-bolder fs-6'} htmlFor={'txtDate'}>Date :</label>
                                    <input className="form-control" id="txtDate" type="date" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="mb-2">
                                    <label className={'fw-bolder fs-6'} htmlFor={'selectCusID'}>Customer :</label>
                                    <select className="form-control" id="selectCusID">

                                    </select>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-2">
                                    <label className={'fw-bolder fs-6'} htmlFor="orderCustomerID">Customer ID</label>
                                    <input className="form-control" id="orderCustomerID" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="mb-2">
                                    <label className={'fw-bolder fs-6'} htmlFor={'orderCustomerName'}>Name :</label>
                                    <input className="form-control" id="orderCustomerName" type="text" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-2">
                                    <label className={'fw-bolder fs-6'} htmlFor={'orderCustomerSalary'}>Salary :</label>
                                    <input className="form-control" id="orderCustomerSalary" type="text" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mb-2">
                                    <label className={'fw-bolder fs-6'} htmlFor={'orderCustomerAddress'}>Address :</label>
                                    <input className="form-control" id="orderCustomerAddress" type="text" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SelectCustomer;
