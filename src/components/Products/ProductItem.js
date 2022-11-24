import React from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useNavigate} from 'react-router-dom'
import styles from './ProductItem.module.css'

const ProductItem = (props) => {

    const navigate = useNavigate();

    const showProductDetails = (productId) => {
        navigate('/products/' + productId);
    }

    return (
        <Card sx={{maxWidth: 345}} className={styles.card}>
            <CardActionArea className={styles.cardActionsArea}>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.product.images[0]}
                    alt="card item"
                    style={{objectFit: 'contain'}}
                />
                <CardContent>
                    <Typography className={styles.text} gutterBottom variant={"subtitle2"} component="div">
                        {props.product.title}
                    </Typography>
                    <Typography className={styles.text} variant={"inherit"} color="text.secondary">
                        {props.product.description}
                    </Typography>
                    <Typography variant={"subtitle2"}>
                        Price : {props.product.price}$
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={styles.cardActions}>
                <Button size={"small"} color={"primary"} onClick={() => showProductDetails(props.product.id)}>
                    View
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductItem;
