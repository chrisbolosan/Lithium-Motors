import React from "react";
import useStore from "../../store";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loading from "../Loading/Loading";
import Colors from "../Colors/Colors";
import car2Img from "../../assets/Product/car2.png";
import car3Img from "../../assets/Product/car3.webp";
import car1Img from "../../assets/Product/car1.png";
import car4Img from "../../assets/Product/car4.jpeg";
import car5Img from "../../assets/Product/car5.jpeg";
import "./Products.css";

const products = [
  {
    id: 1,
    name: "iX Series",
    img: car1Img,
    description:
      "Fast-forward design. Trailblazing power. Discover the First-Ever fully electric Sports Activity Vehicle",
  },
  {
    id: 2,
    name: "M Series",
    img: car2Img,
    description:
      "The First-Ever sporty electric vehicle that will leave you breathless",
  },
  {
    id: 3,
    name: "Z Series",
    img: car3Img,
    description:
      "Quick, high-tech,and featuring a flashy gimmick in its Falcon-wing rear doors.",
  },
  {
    id: 4,
    name: "Buzz Series",
    img: car4Img,
    description: "The road to the ID. Buzz is going to be worth the buzz.",
  },
  {
    id: 5,
    name: "S Series",
    img: car5Img,
    description: "Supercharging the EV era",
  },
];

export default function Product() {
  const addToCart = useStore((state) => state.addToCart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const cart = useStore((state) => state.cart);

  const handleClick = (product) => {
    cart.find((item) => item.id === product.id)
      ? removeFromCart(product.id)
      : addToCart(product);
  };

  return (
    <section className="product-container">
      <div className="product-parent">
        {products.length === 0 ? (
          <Loading />
        ) : (
          products.map((product) => (
            <div className="product-details" key={product.id}>
              <LazyLoadImage alt={<Loading />} src={product.img} />
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.description}</p>
              </div>
              <Colors />
              <button className="cart-btn" onClick={() => handleClick(product)}>
                {cart.find((item) => item.id === product.id)
                  ? "REMOVE FROM CART"
                  : "ADD TO CART"}
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
