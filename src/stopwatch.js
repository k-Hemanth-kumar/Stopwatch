import React, { useState, useRef } from "react";

export default function StopWatch() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setisRunning] = useState(false);
  const intervalRef = useRef(null);
  function startTimer() {
    if (!isRunning) {
      const startingTimer = Date.now() - timer;
      intervalRef.current = setInterval(() => {
        const nowtimer = Date.now();
        setTimer(nowtimer - startingTimer);
      }, 10);
      console.log(startingTimer);
      setisRunning(true);
    }
  }
  function stopTimer() {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setisRunning(false);
    }
  }
  function resetTimer() {
    clearInterval(intervalRef.current);
    setisRunning(false);
    setTimer(0);
  }
  return (
    <div>
      <p>Time : {timer / 1000}</p>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
