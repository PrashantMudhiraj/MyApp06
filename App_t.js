import React from "react";
import ReactDOM from "react-dom/client";
/**
 * <div id="parent">
 *     <div id="child">
 *          <h1>H1 Tag</h1>
 *          <h2>H2 Tag</h2>
 *     </div>
 * </div>
 */

const heading = React.createElement("h1", { id: "heading" }, "Hello React");
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "H1 Tag"),
        React.createElement("h2", {}, "H2 Tag"),
    ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
