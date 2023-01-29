 console.log("This is toturial 37");

// pretend tat this response coming from server
const students = [
    {name:"Harry",subject:"JavaScript"},
    {name:"Rohan",subject:"Machine Learning"}
]

function enrollStudent(student,callback){
    setTimeout(function(){
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    },1000)
}

function getStudents(){
    setTimeout(function(){
        let str = "";
        students.forEach(function(student){
            str += `<li>${student.name}</li>`
            console.log("Student has been fetch");
        })
        document.getElementById('students').innerHTML = str;
    },5000)
}

let newStudent = {name:"Sunny", subject:"Python"};

enrollStudent(newStudent,getStudents);
// getStudents();

