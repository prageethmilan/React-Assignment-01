import React from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useNavigate} from 'react-router-dom'

const ProductItem = (props) => {

    const navigate = useNavigate();

    const showProductDetails = (productId) => {
        navigate('/products/' + productId);
    }

    return (
        <Card sx={{maxWidth: 345}} style={{marginLeft: '10px', marginRight: '10px'}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.product.images[0]}
                    alt="card item"
                    style={{backgroundSize: 'cover'}}
                />
                <CardContent>
                    <Typography gutterBottom variant={"subtitle2"} component="div">
                        {props.product.title}
                    </Typography>
                    <Typography variant={"inherit"} color="text.secondary">
                        {props.product.description}
                    </Typography>
                    <Typography variant={"subtitle2"}>
                        Price : {props.product.price}$
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size={"small"} color={"primary"} onClick={() => showProductDetails(props.product.id)}>
                    View
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductItem;
