import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import { detailsProduct } from "../actions/productActions";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardHeader from "@material-ui/core/CardHeader";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles({
//   about: {
//     overflow: "hidden",
//     textAlign: "justify",
//     color: "grey",
//   },
//   favicon: {
//     // marginLeft: "auto",
//     color: "brown",
//   },
// });
const HomeScreen = (props) => {
  const productList = useSelector((state) => state.productList);

  const { products, loading, error } = productList;

  console.log(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
    dispatch(detailsProduct(props.match.params.id));

    return () => {
      //
    };
  }, []);
  const handleAddToCart = () => {
    props.history.push("/product/");
  };

  return loading ? (
    <div> Loading....</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <>
      <div>
        <div>
          <div className="content" style={{ textAlign: "center" }}>
            <h2>Enjoy your yummy Pizzas</h2>
          </div>
        </div>
      </div>
      <ul className="product-catg">
        {products.map((product) => (
          <li className="product-list" key={product._id}>
            <div className="cards">
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="foodimg"
                    height="300"
                    image={product.image}
                    icon
                  />

                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="h2"
                      style={{ color: "saddlebrown" }}
                    >
                      {product.name}
                    </Typography>
                    <Typography className="about">
                      Rs.{product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link
                    className="aa-product-img"
                    to={"/product/" + product._id}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      onClick={() => {
                        return { handleAddToCart };
                      }}
                    >
                      <IconButton className="favicon" aria-label="add to cart">
                        <ShoppingCartIcon />
                      </IconButton>
                      {/* <i className="fa fa-shopping-cart" /> */}
                      View Details{" "}
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomeScreen;
