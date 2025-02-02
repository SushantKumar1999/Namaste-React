import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {id:"heading"},
  "Namaste React by Sushant Kumar"
)
const jsxHeading =  <h1> Namaste React by Sushant Kumar in JSX </h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

