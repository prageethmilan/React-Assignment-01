import React from 'react';
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel";
import CardItem from "./CardItem";
import styles from './CardGrid.module.css'

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

const CardGrid = (props) => {

    return (
        <section className={styles.main}>
            <Carousel
                responsive={responsive}
                showDots={true}
                containerClass={"carousel-container"}
            >
                {/*{props.products.length === 0 && <LoadingSpinner/>}*/}
                {props.products.length !== 0 && props.products.map((product) => {
                    return <CardItem key={product.id} product={product}/>
                })}
            </Carousel>
        </section>
    );
};

export default CardGrid;
