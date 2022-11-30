import axios from "../axios";
import MockAdapter from "axios-mock-adapter";

let customerMock = new MockAdapter(axios);

let dummyCustomers = [
    {id: 'C-001', name: 'Prageeth', address: 'Galle', salary: 25000.00},
    {id: 'C-002', name: 'Kamal', address: 'Matara', salary: 15000.00},
    {id: 'C-003', name: 'Namal', address: 'Colombo', salary: 45000.00},
    {id: 'C-004', name: 'Sunil', address: 'Kalutara', salary: 5000.00},
    {id: 'C-005', name: 'Ranil', address: 'Kandy', salary: 20000.00},
]

class CustomerService {
    getCustomers = async () => {
        const promise = new Promise((resolve, reject) => {
            customerMock.onGet('/customers').reply(200, {
                customers: dummyCustomers
            });
            axios.get('/customers')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });
        return await promise;
    }

    addCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {

            customerMock.onPost('/customers').reply(200, data);

            axios.post('/customers', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    searchCustomer = async (params) => {
        const promise = new Promise((resolve, reject) => {
            customerMock.onGet('/customers', {params: params}).reply(200, {
                customers: dummyCustomers.filter(customer => customer.id === params.id)
            });
            axios.get('/customers', {params: params})
                .then((res) => {
                    console.log(res);
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });
        return await promise;
    }
}

export default new CustomerService();