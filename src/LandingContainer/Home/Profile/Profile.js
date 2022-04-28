import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-subject">
            <span>
              YOUR VEHICLE,<br></br>YOUR TERMS
            </span>
          </div>

          <div className="profile-info">
            <span>
              Every Electric Vehicle from Lithium Motors comes equipped with a
              Flexible Fast Charger. This portable device, compatible with any
              120V or 240V outlet, delivers optimized charging wherever you go.
              Charge from 0-100% in under 12 hours at a 240V outlet.
            </span>
          </div>
          <div className="profile-options">
            <button className="btn highlighted-btn">LEARN MORE</button>
          </div>
        </div>
        <div className="profile-picture"></div>
      </div>
    </div>
  );
}
