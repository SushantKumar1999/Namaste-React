import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const element = <span>React Element</span>



// React Element 
const titles = (
  <h1> 
    this is an element 
   {element}     {/*// this is how we put react element inside a react element */}
  </h1>
)

// React Functional Component 
const Title = () => (
  <h1> This is a functional Component </h1>
)

// React Functional Component
const HeadingComponent = () => (
  <div id="container">
     <Title />   {/*this is how we put a component inside a component  */}
    {titles}    {/*this is how we put element inside a component  */}
    <h1>this is HeadingComponent </h1>    
  </div>
)



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);



