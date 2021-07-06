import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";

//Screen
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

//Components
import Header from "./components/Header";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/" exact={true} component={HomeScreen} />
        {/* <Route path="/Checkout" component={CheckoutScreen} />
          <Route path="/shipping" component={ShippingScreen} /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
