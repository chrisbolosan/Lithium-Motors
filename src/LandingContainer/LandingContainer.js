import React from "react";
import Home from "./Home/Home";
import Navigation from "./Navigation/Navigation";
import Product from "./Products/Products";

export default function LandingContainer() {
  return (
    <div className="LandingContainer">
      <h1>Landing Container</h1>
      <Navigation />
      <Home />
      <Product />
    </div>
  );
}
