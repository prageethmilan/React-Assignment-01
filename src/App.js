import Layout from "./components/Layout/Layout";
import CardGrid from "./components/Card/CardGrid";
import {useCallback, useEffect, useState} from "react";

function App() {
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     const dataFetch = async () => {
    //         const data = await (await fetch('https://dummyjson.com/products')).json();
    //         setProducts(data.products);
    //     }
    //     dataFetch()
    // }, [])
    const fetchProductsHandler = useCallback(async () => {

        const response = await fetch('https://dummyjson.com/products');

        const data = await response.json();

        setProducts(data.products)

    }, []);

    useEffect(() => {
        fetchProductsHandler();
    },[fetchProductsHandler])

    return (
        <Layout>
            <CardGrid products={products}/>
        </Layout>
    );
}

export default App;
