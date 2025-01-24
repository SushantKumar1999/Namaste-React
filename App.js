const heading2 = React.createElement(
  "h1",
  { id: "headings" },
  "Hello world using React"
); //Here createElement is used for the creation of an HTML tag.

//React.createelement is a object that will become HTML that browser will understand .

const root2 = ReactDOM.createRoot(document.getElementById("roots")); //Here createRoot lets you create a root to display React components inside a browser DOM node.

// If I have to buid this type of HTML structure using React
// <div id="parent">
//     <div id="child">
//        <h1> I m the children </h1>
//        <h2> I m the children siblings </h2>
//     </div>
// </div>

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I m the children"),
    React.createElement("h2", {}, "I m the children siblings"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I m the children"),
    React.createElement("h2", {}, "I m the children siblings"),
  ]),
]);
console.log(parent);
root2.render(parent);
