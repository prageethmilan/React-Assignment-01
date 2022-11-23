import React, {useCallback, useEffect, useState} from 'react';
import ProductsGrid from "../components/Products/ProductsGrid";

const HomePage = (props) => {
    const [products, setProducts] = useState([]);

    const fetchProductsHandler = useCallback(async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products)
    }, []);

    useEffect(() => {
        fetchProductsHandler();
        console.log("Fetch")
    },[])


    return (
        <ProductsGrid products={products}/>
    );
};

export default HomePage;
