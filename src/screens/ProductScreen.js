import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";

import { detailsProduct } from "../actions/productActions";
import Header from "../components/Header";

const ProductScreen = (props) => {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const productList = useSelector((state) => state.productList);

  const { product, loading, error } = productDetails;
  const { products } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());

    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  };

  return loading ? (
    <div> Loading....</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <div>
        <h2>PIZZA Details</h2>
      </div>

      <section id="aa-product-details">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-product-details-area">
                <div className="aa-product-details-content">
                  <div className="row">
                    {/* Modal view slider */}
                    <div className="col-md-5 col-sm-5 col-xs-12">
                      <div className="aa-product-view-slider">
                        <div
                          id="demo-1"
                          className="simpleLens-gallery-container"
                        >
                          <div className="simpleLens-container">
                            <div className="simpleLens-big-image-container">
                              <img
                                src={product.image}
                                className="simpleLens-big-image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal view content */}
                    <div className="col-md-7 col-sm-7 col-xs-12">
                      <div className="aa-product-view-content">
                        <h3>{product.name}</h3>
                        <div className="aa-price-block">
                          <span className="aa-product-view-price">
                            Rs.{product.price}
                          </span>
                          <br />
                          <br />
                          <p className="aa-product-avilability">
                            Avilability: <span>In stock</span>
                          </p>
                        </div>

                        <div className="aa-prod-quantity">
                          <form action>
                            Qty:{" "}
                            <select
                              value={qty}
                              onChange={(e) => {
                                setQty(e.target.value);
                              }}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </form>
                        </div>
                        <div className="aa-prod-view-bottom">
                          <button
                            onClick={handleAddToCart}
                            className="aa-add-to-cart-btn"
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / product category */}
    </div>
  );
};

export default ProductScreen;
