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
