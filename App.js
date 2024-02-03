const heading = React.createElement("div", { id: "heading" }, [
  React.createElement("div", { className: "child1" }, [
    React.createElement("h1", {}, "Harish its H1"),
    React.createElement("p", {}, "Harish its P"),
  ]),
  React.createElement("div", { className: "child2" }, [
    React.createElement("h1", {}, "Harish its H1"),
    React.createElement("p", {}, "Harish its P"),
  ]),
]);
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(heading);
