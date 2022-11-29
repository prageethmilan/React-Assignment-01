import React from 'react';
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel";
import ProductItem from "./ProductItem";
import styles from './ProductsGrid.module.css'
import LoadingSpinner from "../UI/LoadingSpinner";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const responsive = {
    superLargeDesktop: {
        breakpoint: {max: 4000, min: 3000},
        items: 5
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }
};

const ProductsGrid = (props) => {
    const navigate = useNavigate();
    const products = props.products.filter((product, index) => index < 10);

    const showItemForm = (status) => {
        navigate('/items/' + status);
    }

    return (
        <section className={styles.main}>
            <Button variant={'primary'} className={'me-3'} onClick={() => showItemForm('add')}>Add Item</Button>
            <Button variant={'success'} onClick={() => showItemForm('update')}>Update Item</Button>
            {props.products.length === 0
                ?
                <div className={styles.loaderDiv}>
                    <LoadingSpinner/>
                </div>
                :
                <Carousel
                    responsive={responsive}
                    showDots={true}
                    containerClass={"carousel-container"}
                    className={styles.carousel}
                >
                    {products.map((product) => {
                        return <ProductItem key={product.id} product={product}/>
                    })}
                </Carousel>}
        </section>
    );
};

export default ProductsGrid;
