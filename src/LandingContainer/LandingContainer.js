import React from "react";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import NavigationBar from "./Navigation/NavigationBar";
import Product from "./Products/Products";
import "./LandingContainer.css";

export default function LandingContainer() {
  return (
    <div className="landing-container">
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit Countdown here
      </h1>
      <NavigationBar />
      <div className="picture-overlap"></div>
      <Home />
      <Product />
      <Footer />
    </div>
  );
}
