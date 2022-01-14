import React from "react";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import NavigationBar from "./Navigation/NavigationBar";
import Product from "./Products/Products";
import Countdown from "./Countdown/Countdown";
import "./LandingContainer.css";
import Profile from "./Home/Profile/Profile";

export default function LandingContainer() {
  return (
    <div className="landing-container">
      <Countdown />
      <NavigationBar />
      <div className="picture-overlap">
        <Profile />
      </div>
      <Home />

      <Product />

      <Footer />
    </div>
  );
}
