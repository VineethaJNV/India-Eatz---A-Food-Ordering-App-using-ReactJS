const heading = React.createElement("h1", {
    id: "title"
}, "Namaste React");
const heading2 = React.createElement("h2", {
    id: "hello"
}, "hello React");
const div = React.createElement("div", {
    id: "container"
}, [
    heading,
    heading2
]);
const container = React.createElement("div", {
    id: "root"
}, "I am root");
React.render(div);
const root = ReactDom.createElement(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.7c0ccee6.js.map
