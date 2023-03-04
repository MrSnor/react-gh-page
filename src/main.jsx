import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/baseTailwind.css";
import Clock from "./view/Clock";
import Destructuring from "./view/Destructuring";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Clock/>
    {/* <Destructuring/> */}
  </React.StrictMode>
);
