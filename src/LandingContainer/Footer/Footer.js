import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo"></div>

      <div className="footer-navigation-container">
        <h4 className="footer-navigation-subject">INVENTORY</h4>
        <div className="footer-navigation-links">
          <a className="footer-link1" href="/">
            New Vehicles
          </a>
          <a className="footer-link2" href="/">
            Pre-Owned Vehicles
          </a>
          <a className="footer-link3" href="/">
            Certified Pre-Owned Vehicles
          </a>
        </div>
      </div>

      <div className="footer-navigation-container">
        <h4 className="footer-navigation-subject">Financing</h4>
        <div className="footer-navigation-links">
          <a className="footer-link1" href="/">
            Get Approved
          </a>
          <a className="footer-link2" href="/">
            Finance Center
          </a>
          <a className="footer-link3" href="/">
            Lease a vehicle near Chicago, IL
          </a>
        </div>
      </div>

      <div className="footer-navigation-container">
        <h4 className="footer-navigation-subject">About</h4>
        <div className="footer-navigation-links">
          <a className="footer-link1" href="/">
            Leave Us a Review
          </a>
          <a className="footer-link2" href="/">
            About Us
          </a>
          <a className="footer-link3" href="/">
            Hours & Directions
          </a>
        </div>
      </div>
    </div>
  );
}
