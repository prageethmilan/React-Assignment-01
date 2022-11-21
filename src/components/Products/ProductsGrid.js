import React from 'react';
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel";
import ProductItem from "./ProductItem";
import styles from './ProductsGrid.module.css'
import LoadingSpinner from "../UI/LoadingSpinner";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
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

    return (
        <section className={styles.main}>
            {props.products.length === 0 && <div className={styles.loaderDiv}>
                <LoadingSpinner/>
            </div>}
            {props.products.length !== 0 && <Carousel
                responsive={responsive}
                showDots={true}
                containerClass={"carousel-container"}
            >
                {props.products.map((product) => {
                    return <ProductItem key={product.id} product={product}/>
                })}
            </Carousel>}

        </section>
    );
};

export default ProductsGrid;
