import React from "react";

import barStoolImg from "../../assets/Product/barstool.jpg";
import earbudsImg from "../../assets/Product/earbuds.jpg";
import glassesImg from "../../assets/Product/glasses.jpg";
import plantImg from "../../assets/Product/plant.jpg";
import checkImg from "../../assets/Product/arrow.svg";
import "./Products.css";

export default function Product() {
  return (
    <section className="product-container">
      <ul className="product-parent">
        <li className="product-details">
          <img src={barStoolImg} alt="" />
          <h3 className="product-title">Lorem ipsum 1</h3>
          <p className="product-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <ul className="colors">
            <li className="rectangle-1"></li>
            <li className="rectangle-2"></li>
            <li className="rectangle-3"></li>
          </ul>

          <button>Add to cart</button>
        </li>
        <li className="product-details">
          <img src={earbudsImg} alt="" />
          <h3>Lorem ipsum 2</h3>
          <p className="product-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <ul className="colors">
            <li className="color blue"></li>
            <li className="color purple"></li>
            <li className="color pink"></li>
          </ul>

          <button>Add to cart</button>
        </li>
        <li className="product-details">
          <img src={glassesImg} alt="" />
          <h3>Lorem ipsum 3</h3>
          <p className="product-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <ul className="colors">
            <li className="color blue"></li>
            <li className="color purple"></li>
            <li className="color pink"></li>
          </ul>

          <button>Add to cart</button>
        </li>
        <li className="product-details">
          <img src={plantImg} alt="" />
          <h3>Lorem ipsum 4</h3>
          <p className="product-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <ul className="colors">
            <li className="color blue">
              <img src={checkImg} alt="" />
            </li>
            <li className="color purple"></li>
            <li className="color pink"></li>
          </ul>

          <button>Add to cart</button>
        </li>
      </ul>
    </section>
  );
}
