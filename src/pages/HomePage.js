import React, {useCallback, useEffect, useState} from 'react';
import ProductsGrid from "../components/Products/ProductsGrid";

const HomePage = (props) => {
    const [products, setProducts] = useState([]);

    const fetchProductsHandler = async () => {
        console.log('fetch')
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products)
    }

    useEffect(() => {
        fetchProductsHandler();
    },[])


    return (
        <ProductsGrid products={products}/>
    );
};

export default HomePage;
