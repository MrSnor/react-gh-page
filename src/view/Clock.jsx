import { React, useState } from "react";

const hiMom = () => {
  console.log("Hi mom");
};

const stopClockId = setInterval(() => {
  const newTime = new Date().toLocaleTimeString();
  document.getElementById("clockTime").textContent = newTime;
}, 1000);

const Clock = () => {
  const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());

  // update time
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setCurrTime(newTime);
  }

  // comment this to make 'Stop time' work as expected
  const stopClockId = setInterval(updateTime, 1000);

  return (
    <div className="bg-[#2e4049] min-h-screen font-mono grid grid-cols-1 place-content-start md:place-content-center">
      {/* Clock */}
      <div
        id="clockTime"
        className="text-7xl md:text-8xl lg:text-9xl text-white text-center py-10 font-semibold"
      >
        {currTime}
      </div>
      {/* button for time */}
      <button
        type="button"
        className="bg-emerald-500 p-2 rounded-md text-white font-semibold text-5xl md:text-7xl flex mx-auto active:scale-110"
        onClick={() => {
          console.log(`stopClockId : ${stopClockId}`);
          clearInterval(stopClockId);
          console.log("stop clicked");
        }}
      >
        Stop time
      </button>
    </div>
  );
};

export default Clock;
