window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<tr>"
                        + " <th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th>"
                        + "<th>StartDate</th><th>Actions</th>"
                        + "</tr>";
    let innerHtml = `${headerHtml}`;
    let employeePayrollData=createEmployeePayrollJSON();
    for(let empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" alt=""
                src="../assets/profile-images/Ellipse -3.png"></td>
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

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name:'Sherlock holmes',
            _gender:'Male',
            _department:[
                'HR'
            ],
            _salary:'500000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -1.png'
        },
        {
            _name:'Watson',
            _gender:'Male',
            _department:[
                'Engineering'
            ],
            _salary:'400000',
            _startDate: '29 Aug 2019',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../assets/profile-images/Ellipse-2.png'
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for(let dept of deptList) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>` 
    }
    return deptHtml;
}