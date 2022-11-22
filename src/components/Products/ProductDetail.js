import React, {useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import styles from './ProductDetail.module.css'
import {useParams} from 'react-router-dom'

const ProductDetail = (props) => {
    const params = useParams();
    const {productId} = params;
    const [product, setProduct] = useState({});
    const [photo, setPhoto] = useState('')

    useEffect(() => {
        loadProductDetailsHandler(productId);
    }, [productId])

    const loadProductDetailsHandler = (productId) => {
        fetch(`https://dummyjson.com/products/${productId}`)
            .then(res => res.json())
            .then((data) => {
                setProduct(data)
                setPhoto(data.images[0])
            });
    }


    return (
        <div className={styles.detail}>
            <h1 style={{textAlign: 'center'}}>{product.title}</h1>
            <div className={styles.product_img_div}>
                <img src={photo} alt=""/>
            </div>
            <div>
                <Typography variant={"body1"} style={{textDecoration: 'underline',fontWeight: 'bold'}} >Description</Typography>
                <Typography variant={"caption"}>
                    {product.description}
                </Typography>
            </div>
            <div>
                <Typography variant={"body1"} style={{textDecoration: 'underline',fontWeight: 'bold'}} >Category</Typography>
                <Typography variant={"caption"}>
                    {product.category}
                </Typography>
            </div>
            <div>
                <Typography variant={"body1"} style={{textDecoration: 'underline',fontWeight: 'bold'}} >Price</Typography>
                <Typography variant={"caption"}>
                    $ {product.price}
                </Typography>
            </div>
            <div>
                <Typography variant={"body1"} style={{textDecoration: 'underline',fontWeight: 'bold'}}>Discount %</Typography>
                <Typography variant={"caption"}>
                    {product.discountPercentage}%
                </Typography>
            </div>
            <div>
                <Typography variant={"body1"} style={{textDecoration: 'underline',fontWeight: 'bold'}}>Stock</Typography>
                <Typography variant={"caption"}>
                    {product.stock}
                </Typography>
            </div>
        </div>
    );
};

export default ProductDetail;
