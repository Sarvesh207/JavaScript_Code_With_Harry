console.log("wlcm to tut 16 ");

let element = document.createElement('li')
element.className = "childul"
element.id = "crediatedLi"
element.setAttribute = ('title','mytitle')
let text = document.createTextNode('i am sarvesh');
element.appendChild(text)
// element.innerText = "<b>hello this is created</b>"
// element.innerHTML = "<b>hello this is created by sarvesh</b>"

let ul = document.querySelector("ul.this")
ul.appendChild(element)
// console.log(ul);
// console.log(element);

let elem2 = document.createElement('h3')
elem2.id = "elem2";
elem2.className = 'elem2';
let tnode = document.createTextNode('this is created node for node elem2');
elem2.appendChild(tnode);
element.replaceWith(elem2);

let myul = document.getElementById('myul');
// myul.replaceChild(element, document.getElementById('fui'));
// myul.removeChild(document.getElementById('lui'));
let pr = elem2.hasAttribute('herf');
elem2.removeAttribute('id');
elem2.setAttribute('title','myelem2title');
console.log(elem2, pr);

let heading = document.createElement('a');
heading.setAttribute()
heading.textContent = 'Go to code with harry'
console.log(heading);
