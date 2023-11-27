// 1) making a h1 tag and root element :-

// const heading = React.createElement("h1", { id: "heading" }, "hi react");

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



// 2) making nested div like this :-

{/* <div id="parent">
    <div id="child">
        <h2>hello h2</h2>
    </div>
</div> */}


// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         React.createElement("h2", {}, "hello h2")
//     )
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);




// 3) how to make siblings :-

// ans) we have to pass the 3rd parameter as an array

{/* <div id="parent">
    <div id="child">
        <h2>hello h2</h2>
        <h3>hello h3</h3>
    </div>
</div> */}


// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         [
//             React.createElement("h2", {}, "hello h2"),
//             React.createElement("h3", {}, "hello h3")
//         ]
//     )
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);




// 3) how to make another child :-

// ans) we have to pass the 2nd child as an array

// ans) we will use jsx insted of this

{/* <div id="parent">
    <div id="child">
        <h2>hello h2</h2>
        <h3>hello h3</h3>
    </div>
    <div id="child2">
        <h2>hello h2 again</h2>
        <h3>hello h3 again</h3>
    </div>
</div> */}


const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child" },
            [
                React.createElement("h2", {}, "hello h2"),
                React.createElement("h3", {}, "hello h3")
            ]
        ),
        React.createElement("div", { id: "child2" },
            [
                React.createElement("h2", {}, "hello h2 again"),
                React.createElement("h3", {}, "hello h3 again")
            ]
        )
    ]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);