import React from 'react';
import SelectCustomer from "../components/Orders/SelectCustomer";
import SelectItem from "../components/Orders/SelectItem";
import PurchaseOrderDetails from "../components/Orders/PurchaseOrderDetails";
import OrderDetailsTable from "../components/Orders/OrderDetailsTable";

const OrderPage = () => {
    return (
        <div className={'container-fluid mt-3'}>
            <div className={'row'}>
                <SelectCustomer/>
                <SelectItem/>
                <PurchaseOrderDetails/>
            </div>
            <div className={'row'}>
                <OrderDetailsTable/>
            </div>
        </div>
    );
};

export default OrderPage;
