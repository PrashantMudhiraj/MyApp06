import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => ReactElement-JS Object => HTMLElement(render)

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// console.log(heading);
//JSX React
//JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// const JSXHeading = <h1 id="heading">Namaste React using JSX</h1>; // React Element
const JSXHeading = () => (
    <div>
        <h1 id="heading">Namaste React using multiple line</h1>
    </div>
);

const Title = (
    <div>
        <h1 id="heading">Namaste React Title</h1>
    </div>
);

const HeadingComponent = () => {
    return (
        <div id="container">
            <JSXHeading />
            {/* <JSXHeading></JSXHeading> */}
            {JSXHeading()}
            {Title}
            <h1 className="heading">Namaste React Functional Component</h1>
        </div>
    );
};

// console.log(JSXHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(JSXHeading);
root.render(<HeadingComponent />);
