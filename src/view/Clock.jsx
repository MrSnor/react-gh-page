import { useState, useEffect } from "react";

// This is a functional component that displays a clock and a button to start/stop it.
const Clock = () => {
  // 'isRunning' state variable determines if the clock is running or not. It's initially set to true.
  const [isRunning, setIsRunning] = useState(true);
  // 'currTime' state variable holds the current time. It's initially set to the current time in locale string format.
  const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());

  // The 'updateTime' function updates the 'currTime' state variable with the current time in locale string format.
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setCurrTime(newTime);
  }

  // The 'useEffect' hook runs every time the value of 'isRunning' changes. If 'isRunning' is true,
  // it sets an interval to call the 'updateTime' function every second. When the component unmounts,
  // it clears this interval using its cleanup function.
  useEffect(() => {
    let stopClockId;
    if (isRunning) {
      stopClockId = setInterval(updateTime, 1000);
    }

    return () => {
      clearInterval(stopClockId);
    };
  }, [isRunning]);

  return (
    <div className="bg-slate-700 min-h-screen font-mono grid grid-cols-1 place-content-start md:place-content-center select-none">
      {/* This div displays the current time */}
      <div
        id="clockTime"
        className="text-7xl md:text-8xl lg:text-9xl text-white text-center py-10 font-semibold"
      >
        {currTime}
      </div>
      {/* This button toggles the value of 'isRunning', starting/stopping the clock */}
      <button
        type="button"
        className={`p-2 rounded-md text-white font-semibold text-5xl md:text-7xl flex mx-auto active:scale-110 transition-colors duration-500 capitalize ${
          isRunning ? "bg-rose-500" : "bg-emerald-500"
        }`}
        onClick={() => {
          setIsRunning((preValue) => !preValue);
        }}
      >
        {isRunning ? "Stop" : "Start"} time
      </button>
    </div>
  );
};

export default Clock;
