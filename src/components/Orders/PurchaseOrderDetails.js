import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PurchaseOrderDetails = () => {
    return (
        <div className={'col-lg-3'}>
            <section className={'p-4'}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <div className={'row'}>
                            <div className={'col-12'}>
                                <span style={{color: '#3d98ef', fontSize:'13px'}}>Total : </span>
                            </div>
                            <div className={'col-12'}>
                                <span style={{color: '#3d98ef', fontSize:'30px'}}>Rs. 00.0</span>
                            </div>
                        </div>
                    </div>
                    <div className={'col-12'}>
                        <div className="row">
                            <div className="col-12">
                                <span style={{color: '#ef5350', fontSize:'13px'}}>SubTotal : </span>
                            </div>
                            <div className="col-12">
                                <span style={{color: '#ef5350', fontSize:'30px'}}>Rs. 00.0</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2">
                        <div className="mb-2">
                            <label className={'fw-bolder form-label'} htmlFor={'txtCash'}>Cash :</label>
                            <input className="form-control" id="txtCash" min="0" type="number" />
                        </div>
                    </div>
                    <div className="col-6 mt-2">
                        <div className="mb-2">
                            <label className={'fw-bolder form-label'} htmlFor={'txtDiscount'}>Discount :</label>
                            <input className="form-control" id="txtDiscount" min="0" type="number"/>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="mb-2">
                            <label className={'fw-bolder form-label'} htmlFor={'txtBalance'}>Balance</label>
                            <input className="form-control" id="txtBalance" type="text" />
                        </div>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-success mt-4" id="btnSubmitOrder" type="button">Purchase</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PurchaseOrderDetails;
