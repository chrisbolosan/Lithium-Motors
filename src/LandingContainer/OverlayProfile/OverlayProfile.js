import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import standing from "../../assets/Overlay/standing.webp";
import "./OverlayProfile.css";

export default function OverlayProfile() {
  return (
    <div className="picture-overlap">
      <LazyLoadImage className="picture-overlap" alt={""} src={standing} />
    </div>
  );
}
