import Axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productContainers";

const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    // const { data } = await Axios.get("/api/products");
    // const { data } = await fetch(
    //   "https://609e2a6333eed80017957dff.mockapi.io/products",
    //   {
    //     method: "GET",
    //   }
    // );
    const { data } = await Axios.get(
      // "https://609e2a6333eed80017957dff.mockapi.io/products/"
      "https://recipedb-nagu.herokuapp.com/products/"
    );
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};
const detailsProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    console.log("productId", productId);

    // const { data } = await Axios.get("/api/products/" + productId);
    // const { data } = await fetch(
    //   "https://609e2a6333eed80017957dff.mockapi.io/products",
    //   {
    //     method: "GET",
    //   },
    //   productId
    // );
    const { data } = await Axios.get(
      // "https://609e2a6333eed80017957dff.mockapi.io/products/" + productId
      "https://recipedb-nagu.herokuapp.com/products/" + productId
    );
    console.log("Actio Data Apai", data);

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};

export { listProducts, detailsProduct };
