import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-subject">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>

          <div className="profile-info">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </span>
          </div>
          <div className="profile-options">
            <button className="btn highlighted-btn">Lorem</button>
          </div>
        </div>
        <div className="profile-picture"></div>
      </div>
    </div>
  );
}
