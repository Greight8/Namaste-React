import React from "react";
import ReactDOM from "react-dom/client";

// 1) making a h1 tag and root element :-

// const heading = React.createElement("h1", { id: "heading" }, "hi react");
// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// 2) instead of this we can use JSX

const jsxHeading = (
    <h1 id="heading2" className="jsxclass">this is jsx</h1>
);
// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);


// 3) react functional component :-

// const HeadingComponent = () => {
//     return <div id="container">
//         <h2 id="h2">this is h2</h2>
//     </div>
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);


// 4) component composition :- a component inside another component

// const Title = () => {
//     return <h1>this is namaste react</h1>
// }

// const HeadingComponent = () => {
//     return <div id="container">
//         <Title />
//         <h2 id="h2">this is h2</h2>
//     </div>
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);


// 5) lets pass jsx component inside functional component :-
// const newJsx = (
//     <span>this is span </span>
// )

// const Title = () => {
//     return <div id="title">
//         <h1>this is namaste react</h1>
//         {newJsx}
//         {/* <newJsx /> */}
//     </div>
// }

// const HeadingComponent = () => {
//     return <div id="container">
//         <Title />
//         <h2 id="h2">this is h2</h2>
//     </div>
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);


// 5) lets pass functional component inside jsx component :-
const Title = () => {
    return <div id="title">
        <h1>this is namaste react</h1>
    </div>
}

const HeadingComponent = () => {
    return <div id="container">
        {/* <Title /> */}
        {Title()}
        <h2 id="h2">this is h2</h2>
    </div>
}

const newJsx = (
    <div id="newJsx">
        <span>this is span </span>
        {<HeadingComponent />}
        <HeadingComponent></HeadingComponent>
        {<HeadingComponent></HeadingComponent>}
        {HeadingComponent()}
        {/* {HeadingComponent}   this will not work */}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(newJsx);