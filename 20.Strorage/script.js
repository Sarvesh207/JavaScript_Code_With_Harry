console.log('this is tut tk 20');

let impArray = ['adrak', 'ptaz', 'bhindi']

// add key value pair inside local Storage
localStorage.setItem('Name','Harry');
localStorage.setItem('Name2','Rohan');
localStorage.setItem('Name3','Sarvesh');
// localStorage.setItem('sabzi', JSON.stringify(impArray));

// localStorage.clear();
// localStorage.removeItem('Name3')

let nam = JSON.parse(localStorage.getItem('sabzi'))
console.log(nam);

sessionStorage.setItem('sessionName', 'sHarry')
sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray))