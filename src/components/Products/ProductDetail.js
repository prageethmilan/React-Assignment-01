import React from 'react';
import {Typography} from "@mui/material";

const ProductDetail = (props) => {
    return (
        <div>
            <h1>Title</h1>
            <div>
                <img src="" alt=""/>
            </div>
            <div>
                <Typography variant={"subtitle2"}>Description</Typography>
                <Typography variant={"body1"}>

                </Typography>
            </div>
            <div>
                <Typography variant={"subtitle2"}>Category</Typography>
                <Typography variant={"body1"}>

                </Typography>
            </div>
            <div>
                <Typography variant={"subtitle2"}>Price</Typography>
                <Typography variant={"body1"}>

                </Typography>
            </div>
            <div>
                <Typography variant={"subtitle2"}>Discount %</Typography>
                <Typography variant={"body1"}>

                </Typography>
            </div>
            <div>
                <Typography variant={"subtitle2"}>Stock</Typography>
                <Typography variant={"body1"}>

                </Typography>
            </div>
        </div>
    );
};

export default ProductDetail;
