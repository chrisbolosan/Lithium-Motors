import React from "react";

import barStoolImg from "../../assets/Product/barstool.jpg";
import earbudsImg from "../../assets/Product/earbuds.jpg";
import glassesImg from "../../assets/Product/glasses.jpg";
import plantImg from "../../assets/Product/plant.jpg";
import checkImg from "../../assets/Product/arrow.svg";

export default function Product() {
  return (
    <section className="product-container">
      <ul>
        <li>
          <img src={barStoolImg} alt="" />
          <h3>Lorem ipsum 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <ul className="colors">
            <li className="color blue"></li>
            <li className="color purple"></li>
            <li className="color pink"></li>
          </ul>

          <button>Add to cart</button>
        </li>
        <li>
          <img src={earbudsImg} alt="" />
          <h3>Lorem ipsum 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <ul className="colors">
            <li className="color blue"></li>
            <li className="color purple"></li>
            <li className="color pink"></li>
          </ul>

          <button>Add to cart</button>
        </li>
        <li>
          <img src={glassesImg} alt="" />
          <h3>Lorem ipsum 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <ul className="colors">
            <li className="color blue"></li>
            <li className="color purple"></li>
            <li className="color pink"></li>
          </ul>

          <button>Add to cart</button>
        </li>
        <li>
          <img src={plantImg} alt="" />
          <h3>Lorem ipsum 4</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

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
