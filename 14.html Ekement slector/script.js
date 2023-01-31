// console.log("wlcm to dom selector");

// single slector
//multi selector

// single elelment slector
let element = document.getElementById("Myfirst")
// element.parentNode
// console.log(element.parentNode);
// // element.childNodes
// console.log(element.parentNode);
// // element.className
// element.style.background = "red"
// element.textContent = "sarvesh is not  good boy"
// element.innerHTML = "<h1>hii how are you</h1>"


// let elems = document.querySelector('.child')
// elems = document.querySelector("#Myfirst")
// elems = document.querySelector("div")
// console.log(elems);

//multi selector

let ele = document.getElementsByClassName("child")
ele = document.getElementsByClassName('container')
ele = document.getElementsByTagName('div')

console.log(ele);

// for (let index = 0; index < ele.length; index++) {
//     const element = ele[index];
//     console.log(element);
//     element.style.background = "red"
    
// }

Array.from(ele).forEach(element => {
    console.log(element);
    element.style.color = 'blue'
})