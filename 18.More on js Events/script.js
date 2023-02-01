console.log("this is tut 18");

let btn = document.getElementById('btn');
btn.addEventListener('click', func1);
// btn.addEventListener('click', func1);
btn.addEventListener('mousedown', func1);
function func1(e){
    console.log("thanks", e);
    e.preventDefault();
}