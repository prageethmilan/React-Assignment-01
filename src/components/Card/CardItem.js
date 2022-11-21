import React from 'react';
import {Card} from "@mui/material";
import {CardActionArea} from "@mui/material";
import {CardMedia} from "@mui/material";
import {CardContent} from "@mui/material";
import {Typography} from "@mui/material";
import {CardActions} from "@mui/material";
import {Button} from "@mui/material";

const CardItem = (props) => {


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                    <Typography variant={"subtitle1"}>
                        Price : 15$
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
};

export default CardItem;
