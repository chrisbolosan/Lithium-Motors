import React from "react";
import useStore from "../../store";
import { LazyLoadImage } from "react-lazy-load-image-component";
import barStoolImg from "../../assets/Product/barstool.webp";
import earbudsImg from "../../assets/Product/earbuds.webp";
import glassesImg from "../../assets/Product/glasses.webp";
import plantImg from "../../assets/Product/plant.webp";

import "./Products.css";
import Colors from "../Colors/Colors";

const products = [
  {
    id: 1,
    name: "Lorem ipsum 1",
    img: glassesImg,
  },
  {
    id: 2,
    name: "Lorem ipsum 2",
    img: barStoolImg,
  },
  {
    id: 3,
    name: "Lorem ipsum 3",
    img: earbudsImg,
  },
  {
    id: 4,
    name: "Lorem ipsum 4",
    img: plantImg,
  },
];

export default function Product() {
  const addToCart = useStore((state) => state.addToCart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const cart = useStore((state) => state.cart);

  const handleClick = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <section className="product-container">
      <div className="product-parent">
        {products.map((product) => (
          <div className="product-details" key={product.id}>
            <LazyLoadImage alt={""} src={product.img} />
            <div className="product-info">
              <h3 className="product-title">{product.name}</h3>
              <p className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <Colors />

            <button className="cart-btn" onClick={() => handleClick(product)}>
              {cart.find((item) => item.id === product.id)
                ? "Remove from cart"
                : "Add to cart"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
