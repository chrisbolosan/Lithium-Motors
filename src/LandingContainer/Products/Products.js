import React from "react";

import barStoolImg from "../../assets/Product/barstool.webp";
import earbudsImg from "../../assets/Product/earbuds.webp";
import glassesImg from "../../assets/Product/glasses.webp";
import plantImg from "../../assets/Product/plant.webp";
// import checkImg from "../../assets/Product/arrow.svg";
import "./Products.css";

export default function Product() {
  return (
    <section className="product-container">
      <div className="product-parent">
        <div className="product-details">
          <img src={glassesImg} alt="" />
          <div className="product-info">
            <h3 className="product-title">Lorem ipsum 1</h3>
            <p className="product-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="colors">
            {/* <input type="checkbox" id="checkbox-1-1" class="regular-checkbox" /> */}
            <input
              type="checkbox"
              className="blue"
              name="blue"
              value="#143061"
            />
            <input
              type="checkbox"
              className="purple"
              name="purple"
              value="#81396F"
            />
            <input
              type="checkbox"
              className="pink"
              name="purple"
              value="#81396F"
            />
          </div>

          <button>Add to cart</button>
        </div>
        <div className="product-details">
          <img src={barStoolImg} alt="" />
          <div className="product-info">
            <h3 className="product-title">Lorem ipsum 2</h3>
            <p className="product-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="colors">
            <input
              type="checkbox"
              className="blue"
              name="blue"
              value="#143061"
            />
            <input
              type="checkbox"
              className="purple"
              name="purple"
              value="#81396F"
            />
            <input
              type="checkbox"
              className="pink"
              name="purple"
              value="#81396F"
            />
          </div>

          <button>Add to cart</button>
        </div>

        <div className="product-details">
          <img src={earbudsImg} alt="" />
          <div className="product-info">
            <h3 className="product-title">Lorem ipsum 3</h3>
            <p className="product-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="colors">
            <input
              type="checkbox"
              className="blue"
              name="blue"
              value="#143061"
            />
            <input
              type="checkbox"
              className="purple"
              name="purple"
              value="#81396F"
            />
            <input
              type="checkbox"
              className="pink"
              name="purple"
              value="#81396F"
            />
          </div>

          <button>Add to cart</button>
        </div>
        <div className="product-details">
          <img src={plantImg} alt="" />
          <div className="product-info">
            <h3 className="product-title">Lorem ipsum 4</h3>
            <p className="product-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="colors">
            <input
              type="checkbox"
              className="blue"
              name="blue"
              value="#143061"
            />
            <input
              type="checkbox"
              className="purple"
              name="purple"
              value="#81396F"
            />
            <input
              type="checkbox"
              className="pink"
              name="purple"
              value="#81396F"
            />
          </div>

          <button>Add to cart</button>
        </div>
        {/* <li className="product-details">
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
        </li> */}
      </div>
    </section>
  );
}
