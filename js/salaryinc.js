const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent=salary.value;
salary.oninput = function() {
    output.textContent=salary.value;
}