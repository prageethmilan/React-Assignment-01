import React from 'react';

const SelectItem = () => {
    return (
        <div className="col-lg-5 mt-lg-0 mt-3">
            <div className="card">
                <div className="card-header bg-primary fw-bolder">Item Select</div>
                <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="col-6">
                                <div className="mb-2">
                                    <label className={'fw-bolder fs-6'} htmlFor={'selectItemCode'}>Item :</label>
                                    <select className="form-control" id="selectItemCode">

                                    </select>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-2">
                                    <label className={'fw-bolder fs-6'} htmlFor={'txtItemCode'}>Item Code :</label>
                                    <input className="form-control" id="txtItemCode" type="text"/>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="mb-2">
                                    <label className={'fw-bolder fs-6'} htmlFor={'txtItemDescription'}>Item Name :</label>
                                    <input className="form-control" id="txtItemDescription" type="text"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="mb-2">
                                    <label className="fw-bolder fs-6" htmlFor={'txtItemPrice'}>Price :</label>
                                    <input className="form-control" id="txtItemPrice" type="text"/>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mb-2">
                                    <label className="fw-bolder fs-6" htmlFor={'txtQTYOnHand'}>QtyOnH :</label>
                                    <input className="form-control" id="txtQTYOnHand" type="text"/>
                                </div>
                            </div>
                            <hr/>
                            <div className="col-12">
                                <div className="mb-2">
                                    <label className={'fw-bolder fs-6'} htmlFor={'txtQty'}>Order Quantity :</label>
                                    <input className="form-control" id="txtQty" min="1" type="number"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group text-right">
                            <button className="btn btn-danger col-12 col-sm-auto mt-1" id="btnAddToTable" type="button">
                                Add Item
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SelectItem;
