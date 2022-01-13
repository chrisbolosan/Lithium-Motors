import React from "react";
import "./Countdown.css";
export default function Countdown() {
  return (
    <div className="countdown-container">
      <div className="countdown-parent">
        <div className="countdown-details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          <div className="countdown-clock-container">
            <div id="clockdiv">
              Days: <span className="days"></span>
              Hours: <span className="hours"></span>
              Minutes: <span className="minutes"></span>
              Seconds: <span className="seconds"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
