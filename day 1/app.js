const heading1 = React.createElement("h1", { id: "h1" }, "Hello Everyone");
const heading2 = React.createElement("h2", { id: "h2" }, "Hello Everyone from Gora");
const container = React.createElement("div", { id: "container" }, [ heading1, heading2]); // we are going to use an array
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);