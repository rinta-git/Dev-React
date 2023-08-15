import React from "react";
import ReactDOM from "react-dom/client";



//functional component
const Title = () => <h2 className="heading2"> Rinta Roy </h2>;
const Caption = () => <i>Good Morning 🥰</i>;
const Test = () => <text>Today I covered foundation</text>

//JS variable
let data = [
  "React Element",
  "React class based component",
  "React functional componenent",
];

//React element
const reactElem = <h1>Hey, I'm an element of React</h1>;
const notes = (
  <div>
    <p>We can write react components, js codes in react element.<br/> Similarly, react element and JS code can be written in react component as well. 😃 </p>
    {Test}
  </div>
)

const Intro = () => (
  <div id="container">
    <Title />
    {Caption()}
    <h1 className="Introduction">Introducing functional component</h1>
    <p>{data.join(", ")}</p>
    {reactElem}
    {notes}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Intro />);
