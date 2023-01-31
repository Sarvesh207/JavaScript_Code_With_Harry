console.log("wlcm to dom selector");

let cont = document.querySelector(".no")
cont = document.querySelector(".container");
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeType);
// console.log(cont.childNodes);
// console.log(cont.children);

let container = document.querySelector(".container")
// console.log(container.children[1].children[0].children[0])

// console.log(container.firstChild);
// console.log(container.firstElementChild);


// console.log(container.lastChild)
// console.log(container.lastElementChild)

// console.log(container.firstChild.parentNode);
// console.log(container.firstChild.nextSibling);
console.log(container.firstChild.nextElementSibling);
console.log(container.firstChild.nextElementSibling.nextElementSibling);