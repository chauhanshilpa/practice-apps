import React, { useState, useEffect, useRef } from "react";
import { STATUS, INITIAL_COUNT } from "../constants";

export default function CountdownTimer() {
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
  const [status, setStatus] = useState(STATUS.STOPPED);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;

  useEffect(() => {
    setStatus(STATUS.STARTED);
    if (status === 0) {
      setStatus(STATUS.STOP);
    }
    //eslint-disable-next-line
  }, []);

  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    status === STATUS.STARTED ? 1000 : null
  );

  return (
    <div className="countdown">
      <h4>Time is running fast. Sign up and fill your cart!</h4>
      <div className="timer">
        {twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}
      </div>
    </div>
  );
}
                         
function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const twoDigits = (num) => String(num).padStart(2, "0");
