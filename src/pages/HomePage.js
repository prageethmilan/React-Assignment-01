import React, {useEffect, useState} from 'react';
import ProductsGrid from "../components/Products/ProductsGrid";

const HomePage = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('fetch');
        fetch('https://dummyjson.com/products').then(res => res.json()).then(data => setProducts(data.products));
    }, [])


    return (
        <ProductsGrid products={products}/>
    );
};

export default HomePage;
