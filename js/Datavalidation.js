window.addEventListener('DOMContentLoaded', () => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.name-error');
    name.oninput = function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    };        

    const date = document.querySelector('#date');
    const dateError = document.querySelector('.date-error');
    date.addEventListener('input', function() {
        let startDate = document.querySelector('#day').value+"-"+document.querySelector('#month').value+"-"+document.querySelector('#year').value;
        try {
            (new EmployeePayrollData()).startDate = new Date(Date.parse(startDate));
            dateError.textContent="";
        } catch(e) {
            dateError.textContent=e;
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
});