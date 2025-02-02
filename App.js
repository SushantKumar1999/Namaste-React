import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => (
  <h1> Sushant Kumar</h1>
)

// React Functional Component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1>this is HeadingComponent </h1>    
  </div>
)

// What we have done above is the component composition.


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);



