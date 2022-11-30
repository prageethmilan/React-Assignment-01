import axios from "../axios";
import MockAdapter from "axios-mock-adapter";

let itemMock = new MockAdapter(axios);

let dummyItems = [
    {itemId: 'I-001', title: 'Dell Laptop', price: 150000.00, qty: 20},
    {itemId: 'I-002', title: 'Samsung Universe 9', price: 125000.00, qty: 15},
    {itemId: 'I-003', title: 'Iphone 7', price: 52000.00, qty: 35},
    {itemId: 'I-004', title: 'Iphone 12', price: 250000.00, qty: 10},
    {itemId: 'I-005', title: 'Huawei Y50', price: 95000.00, qty: 15},
    {itemId: 'I-006', title: 'Hp Laptop', price: 175000.00, qty: 10},
]

class ItemService {
    getItems = async () => {
        const promise = new Promise((resolve, reject) => {
            itemMock.onGet('/items').reply(200, {
                items: dummyItems
            });
            axios.get('/items')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });
        return await promise;
    }

    addItems = async (data) => {
        const promise = new Promise((resolve, reject) => {

            itemMock.onPost('/items').reply(200,data);

            axios.post('/items', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    searchItem = async (params) => {
        const promise = new Promise((resolve, reject) => {
            itemMock.onGet('/items',{params:params}).reply(200, {
                items: dummyItems.filter(item => item.itemId === params.itemId)
            });
            axios.get('/items',{params:params})
                .then((res) => {
                    console.log(res)
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });
        return await promise;
    }

    updateItem = async (data) => {
        const promise = new Promise((resolve, reject) => {
            itemMock.onPut('/items').reply(200,data);
            axios.put('/items',data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });
        return await promise;
    }
}

export default new ItemService();