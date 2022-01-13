import React from "react";
import "./Countdown.css";
export default function Countdown() {
  return (
    <div className="countdown-container">
      <div className="countdown-parent">
        <div className="countdown-details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          <div className="countdown-clock-container">
            <div>
              <div className="number">00</div>
              <div className="text">days</div>
            </div>
            <div>
              <div className="number">00</div>
              <div className="text">hours</div>
            </div>
            <div>
              <div className="number">00</div>
              <div className="text">minutes</div>
            </div>
            <div>
              <div className="number">00</div>
              <div className="text">seconds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
