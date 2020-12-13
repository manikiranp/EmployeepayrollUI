const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent=salary.value;
salary.oninput = function() {
    output.textContent=salary.value;
}
const nameinp = document.querySelector('#name');
const nameError = document.querySelector('.name-error');
nameinp.oninput = function() {
    let nameRegex = RegExp(/^[A-Z][a-z]{2,}$/);
    if(nameRegex.test(nameinp.value))
    nameError.textContent="";
    else
    nameError.textContent="Name format is invalid";
}; 

function datefun() {
    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    return `${y}${m < 10 ? '0' : ''}${m}${d < 10 ? '0' : ''}${d}`;
};

// const inpd = document.getElementById('day');
// const inpm = document.getElementById('month');
//const inpy = document.getElementById('Year');
const inpy = document.querySelector('#Year');
//var inpdate = inpy.toString()+inpm.toString()+inpd.toString();
const dateError = document.querySelector('.year-error');
inpy.addEventListener('option',function() {
    // let today = datefun();
    let sam = 2000;
    if(inpy.value > sam) 
    dateError.textContent="";
    else
    dateError.textContent="Future year not allowed"; 
});