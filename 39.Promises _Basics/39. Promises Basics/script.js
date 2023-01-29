// Promise :
// -resolve
// -reject
// -pending

// function func1(){
//     return new Promise(function(resolve,reject){
//         setTimeout(() =>{
//             const error = true;
//             if(!error){
//                 console.log("Function: Your promise has not been resolved");
//                 resolve();
//             }
//             else {
//                 console.log("Function: Your promise haas not been resolved");
//                 reject("Sorry not fulfilled");
//             }

//         },2000)
//     })
// }

// func1().then(function(){
//     console.log("Harray:Thanks for ressolving");
// }).catch(function(error){
//     console.log("Harry:Very bad bro.Reason "+error);
// })

let promise = new Promise(function(resolve,reject){
    alert("hello")
    resolve(56);
})
console.log("hello one");
setTimeout(function() {
    console.log("hello in two");
    
},2000)
console.log("my name is john "+"hello in three second");
console.log(promise);



// fetch google.com home page 
// fetch data from yhe api
// fetch picture from the server
// print downloaidng

let p = new Promise((resolve, reject)=>{
    
})

