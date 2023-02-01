let str = 'python';
let links = document.links;
console.log(links);
let herf;
Array.from(links).forEach(function(element){
    herf = element.href
    console.log(herf);
    if(herf.includes(str)){
        console.log(herf);
    }
})