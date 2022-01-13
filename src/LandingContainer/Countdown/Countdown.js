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
              Days: <span class="days"></span>
              Hours: <span class="hours"></span>
              Minutes: <span class="minutes"></span>
              Seconds: <span class="seconds"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
