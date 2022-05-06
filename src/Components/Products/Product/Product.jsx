import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Box,
  Typography,
  IconButton,
} from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./productStyles";
import "../products.css";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  const theme = useTheme();

  // const handleAddToCart = () => onAddToCart(product);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column" }}
      paddingBottom={"2px"}
      width={"50%"}
    >
      <Card className={classes.root}>
        <CardContent className="grid__product">
          <div className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.productName}
            </Typography>
          </div>
          <CardMedia
            className={classes.media}
            component="img"
            image="./Music/Logo_IM icon Black.png"
            title={product.productName}
          />
          <Typography
            gutterBottom
            variant="body1"
            color="textSecondary"
            component="p"
          >
            {" "}
            {"\n" + product.description}
          </Typography>
          <AudioPlayer
            elevation={0}
            width="100%"
            variation="primary"
            download={false}
            loop={false}
            spacing={2}
            debug={false}
            src={product.src}
          />
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <Typography variant="h5" component="h2">
            ${product.price}
          </Typography>
          <IconButton
            aria-label="Add to Cart"
            onClick={() => {
              onAddToCart(product);
            }}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Product;

{
  {
    /* <SoundCloudPlayer
            className="react-player"
            url={product.url}
            controls={true}
            width="100%"
            height="200px"
          /> */
  }

  /* <Card className={classes.root} sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent className={classes.cardContent} sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {product.productName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="div">
            {product.composer}
          </Typography>
        </CardContent>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            image="./Music/Logo_IM icon Black.png"
            alt="Logo"
          />
          <AudioPlayer
            elevation={1}
            width="500px"
            variation="primary"
            download={false}
            loop={false}
            spacing={2}
            debug={false}
            src={product.src}
          />
        </CardActionArea>
      </Box>
    </Card> */
}
