let empPayrollList;
window.addEventListener('DOMContentLoaded', () => {
    empPayrollList = getEmployeeDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
});

const getEmployeeDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}


const createInnerHtml = () => {
    const headerHTML = "<tr>" 
                        + "<th></th>    <th> Name </th>    <th> Gender </th>" 
                        + "<th> Department </th>    <th> Salary </th> "
                        + "<th> Start Date </th>    <th> Actions </th>"
                        + "</tr>";
    if(empPayrollList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for(const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" 
                src="${employeePayrollData._profilePic}" alt=""></td>
            <td>${employeePayrollData._name}</td>
            <td>${employeePayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${employeePayrollData._salary}</td>
            <td>${employeePayrollData._startDate}</td>
            <td>
                <img name="${empPayrollData._id}" onclick="remove(this)" alt="delete"
                    src="../assets/icons/delete-black-18dp.svg">
                <img name="${empPayrollData._id}" onclick="update(this)" alt="update"
                    src="../assets/icons/create-black-18dp.svg">
            </td>
        </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}



const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for(let dept of deptList) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>` 
    }
    return deptHtml;
}