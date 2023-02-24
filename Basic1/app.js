const heading = React.createElement("h1", {}, "hello world!"); //tag, obj, value
const p = React.createElement(
  "p",
  { title: "first" },
  "Sample programme in react"
);
const div = React.createElement("div", { name: "parent div" }, [
  heading,
  p,
]);
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(div);