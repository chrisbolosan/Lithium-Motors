import React from "react";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import NavigationBar from "./Navigation/NavigationBar";
import Product from "./Products/Products";

export default function LandingContainer() {
  return (
    <div className="landing-container">
      <h1>Landing Container</h1>
      <NavigationBar />
      <Home />
      <Product />
      {/* <Footer /> */}
    </div>
  );
}
