// let root = document.getElementById("root");
// root.innerHTML = `<h1>Hello World</h1>`

let heading = document.createElement("h1");
heading.innerHTML = `Hello World`;

let root = document.getElementById("root");
root.appendChild(heading);