window.addEventListener('DOMContentLoaded', () => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.name-error');
    name.oninput = function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    };

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
});

const save = () => {
    try {
        let employeePayrollData=createEmployeePayroll();
    } catch (e) {
        return;
    }
    }

const createEmployeePayroll=() => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name=getInputValueById('#name');
    } catch (e) {
        setTextValue('.name-error', e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
    employeePayrollData.date = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}
const getSelectedValues =(propertyValue) => {
    let allItems=document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById = (id) => {
    let value=document.querySelector(id).value;
    return value;
}










