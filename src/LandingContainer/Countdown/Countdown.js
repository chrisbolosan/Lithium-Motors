import React, { useEffect, useState } from "react";
import "./Countdown.css";
import whiteCross from "../../assets/Countdown/White Close.svg";

function getTimeRemaining(endTime) {
  const total = Date.parse(endTime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

const deadline = new Date(Date.parse(new Date()) + 2 * 24 * 60 * 60 * 1000);

export default function Countdown() {
  const [timer, setTimer] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [isOpen, setIsOpen] = useState(true);

  // countdown timer from a specified date
  useEffect(() => {
    const interval = setInterval(() => {
      const t = getTimeRemaining(deadline);
      setTimer({
        days: t.days,
        hours: t.hours,
        minutes: t.minutes,
        seconds: t.seconds,
      });

      if (t.total <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return isOpen ? (
    <div className="countdown-container">
      <div className="countdown-parent">
        <div className="countdown-details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          <div className="countdown-clock-container">
            <div>
              <div className="number">
                {timer.days.toString().padStart(2, "0")}
              </div>
              <div className="text">days</div>
            </div>
            <div>
              <div className="number">
                {timer.hours.toString().padStart(2, "0")}
              </div>
              <div className="text">hours</div>
            </div>
            <div>
              <div className="number">
                {timer.minutes.toString().padStart(2, "0")}
              </div>
              <div className="text">minutes</div>
            </div>
            <div>
              <div className="number">
                {timer.seconds.toString().padStart(2, "0")}
              </div>
              <div className="text">seconds</div>
            </div>
          </div>
        </div>

        <button className="close-btn" onClick={() => setIsOpen(false)}>
          <img src={whiteCross} alt="" />
        </button>
      </div>
    </div>
  ) : null;
}
