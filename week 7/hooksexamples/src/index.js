import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Hook_ControlledButtonState from "./Counter";
import EmojeeCounter from "./EmojeeCounters";
import DynamicImageComponent from "./DynamicImageComponent";

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Hook_ControlledButtonState />
    <EmojeeCounter pic="Love" />
    <EmojeeCounter pic="sad" />
    <EmojeeCounter pic="Like" />
    <DynamicImageComponent />
  </React.StrictMode>
);
