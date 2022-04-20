import "./index.scss";

import { useState, useEffect } from "react";

const DigitalClock = () => {
  const currentTime = () => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    return { h, m, s };
  };
  const [hours, setHours] = useState(currentTime().h);
  const [minutes, setMinutes] = useState(currentTime().m);
  const [seconds, setSeconds] = useState(currentTime().s);

  const addZero = (unit) => {
    if (unit < 10) {
      return `0${unit}`;
    } else return unit;
  };

  const setTime = () => {
    setHours(currentTime().h);
    setMinutes(currentTime().m);
    setSeconds(currentTime().s);
  };
  useEffect(() => {
    setInterval(() => setTime(), 1000);
  });

  return (
    <div className="time">
      <div className="circle">
        <svg>
          <div className="dots hour-dot">abc</div>
          {/* <circle cx="70" cy="70" r="70"></circle> */}
          <circle
            cx="70"
            cy="70"
            r="70"
            className="hours"
            style={{
              strokeDashoffset: `${440 - (440 * currentTime().h) / 24}`,
            }}
          ></circle>
        </svg>
        <div className="hours">{addZero(hours)}</div>
      </div>
      <div className="circle">
        <svg>
          <div className="dots min-dot">abc</div>
          {/* <circle cx="70" cy="70" r="70"></circle> */}
          <circle
            cx="70"
            cy="70"
            r="70"
            className="minutes"
            style={{
              strokeDashoffset: `${440 - (440 * currentTime().m) / 60}`,
            }}
          ></circle>
        </svg>
        <div className="minutes">{addZero(minutes)}</div>
      </div>
      <div className="circle">
        <svg>
          <div className="dots sec-dot">abc</div>
          {/* <circle cx="70" cy="70" r="70"></circle> */}
          <circle
            cx="70"
            cy="70"
            r="70"
            className="seconds"
            style={{
              strokeDashoffset: `${440 - (440 * currentTime().s) / 60}`,
            }}
          ></circle>
        </svg>
        <div className="seconds">{addZero(seconds)}</div>
      </div>
      
    </div>
  );
};

export default DigitalClock;
