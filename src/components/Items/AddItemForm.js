import React, {useEffect, useRef, useState} from 'react';
import styles from './AddItemForm.module.css'
import {useParams} from "react-router-dom";
import NotFound from "../../pages/NotFound";
import ItemService from "../../service/ItemService";

let regItemId = new RegExp("^(I-)[0-9]{3}");
let regItemTitle = new RegExp("^[A-z 0-9.]{3,}");
let regItemPrice = new RegExp("^[0-9]{1,}([.][0-9]{2})?")
let regItemQty = new RegExp("^[0-9]{1,}");

const AddItemForm = (props) => {
    const params = useParams();
    const {status} = params;
    const [isExists, setIsExists] = useState(false);
    const [text, setText] = useState('');
    const itemIdRef = useRef();
    const itemTitleRef = useRef();
    const itemPriceRef = useRef();
    const itemQtyRef = useRef();

    useEffect(() => {
        switch (status) {
            case 'add':
                setIsExists(true)
                setText('Add');
                break;
            case 'update':
                setIsExists(true);
                setText('Update');
                break;
            default:
                setIsExists(false);
        }
    }, []);

    const itemFormSubmitHandler = (event) => {
        event.preventDefault();
        (regItemId.test(itemIdRef.current.value) ?
                (regItemTitle.test(itemTitleRef.current.value) ?
                        (regItemPrice.test(itemPriceRef.current.value) ?
                                (regItemQty.test(itemQtyRef.current.value) ?
                                        ((status === 'add') ? addItemHandler() : updateItemHandler())
                                        : alert('Item quantity is a required field.')
                                ) : alert('Item price is a required field.')
                        ) : alert('Item title is a required field.')
                ) : alert('Item ID is a required field.Pattern I-001')
        )
    }

    const addItemHandler = async () => {
        let item = {
            itemId: itemIdRef.current.value,
            title: itemTitleRef.current.value,
            price: itemPriceRef.current.value,
            qty: itemQtyRef.current.value
        }
        let res = await ItemService.addItems(item);
        if (res.status === 200) {
            alert('Item Added Successfully');
            clearTextFields();
        } else {
            alert('Item Not Added!');
        }
    }

    const clearTextFields = () => {
        itemIdRef.current.value = '';
        itemTitleRef.current.value = '';
        itemPriceRef.current.value = '';
        itemQtyRef.current.value = '';
    }

    const searchItem = async (event) => {
        if (event.key === 'Enter') {
            if (status !== 'add') {
                if (regItemId.test(itemIdRef.current.value)) {
                    let params = {
                        itemId: itemIdRef.current.value
                    }
                    let res = await ItemService.searchItem(params);
                    if (res.data.items.length > 0) {
                        itemTitleRef.current.value = res.data.items[0].title;
                        itemPriceRef.current.value = res.data.items[0].price;
                        itemQtyRef.current.value = res.data.items[0].qty;
                    } else {
                        alert('Item Not Found');
                    }
                } else {
                    alert('Item ID is a required field.Pattern I-001')
                }
            }
        }
    }

    const updateItemHandler = async () => {
        let item = {
            itemId: itemIdRef.current.value,
            title: itemTitleRef.current.value,
            price: itemPriceRef.current.value,
            qty: itemQtyRef.current.value
        }
        let res = await ItemService.updateItem(item);
        console.log(res);
        if (res.status === 200) {
            alert('Item Updated Successfully');
            clearTextFields();
        } else {
            alert('Item Not Updated!');
        }
    }


    return (
        <div>
            {!isExists ? <NotFound/> :
                <div className={styles.itemForm}>
                    <h1 className={'text-center mb-3'}>{text} Item</h1>
                    <form>
                        <div className={'mb-2'}>
                            <label className={'form-label mb-1 fw-bolder'} htmlFor={'itemId'}>Item ID</label>
                            <input className={'form-control'} type={'text'} id={'itemId'} required
                                   ref={itemIdRef} onKeyDown={searchItem}/>
                        </div>
                        <div className={'mb-2'}>
                            <label className={'form-label mb-1 fw-bolder'} htmlFor={'title'}>Title</label>
                            <input className={'form-control'} type={'text'} id={'title'} required
                                   ref={itemTitleRef}/>
                        </div>
                        <div className={'mb-2'}>
                            <label className={'form-label mb-1 fw-bolder'} htmlFor={'price'}>Price</label>
                            <input className={'form-control'} type={'number'} id={'price'} required
                                   ref={itemPriceRef}/>
                        </div>
                        <div className={'mb-2'}>
                            <label className={'form-label mb-1 fw-bolder'} htmlFor={'quantity'}>Quantity</label>
                            <input className={'form-control'} type={'number'} id={'quantity'} required
                                   ref={itemQtyRef}/>
                        </div>
                    </form>
                    <div className={'modal-footer d-flex align-items-center justify-content-around'}>
                        <button type={'submit'} className={'btn btn-primary'}
                                onClick={itemFormSubmitHandler}>{text} Item
                        </button>
                        <button className={'btn btn-secondary'} type={'button'} onClick={clearTextFields}>Cancel
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}


export default AddItemForm;
