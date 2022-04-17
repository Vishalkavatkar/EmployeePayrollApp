window.addEventListener('DOMContentLoaded', (event) => {
  createInnerHtml();
});
const createInnerHtml = () => {
  const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                      "<th>Salary</th><th>Start Date</th><th>Actions</th>";
  let innerHtml = ${headerHtml}
  let empPayrollData = createEmployeePayrollJSON()[0];
  for (const empPayrollData of empPayrollList) {
    innerHtml = '${innerHtml}'
  }
  
      <tr>
        <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
          <img name="${empPayrollData._id}" onclick="remove(this)"
               src="../assets/icons/delete-black-18dp.svg" alt="delete">
          <img name="${empPayrollData._id}" onclick="update(this)"
               src="../assets/icons/delete-black-18dp.svg" alt="edit">
        </td>
      </tr>
   ;
  document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = {} => {
  let empPayrollListLocal = {
    _name: 'Vishal Kavatkar',
    _gender: 'male',
    _department: [
      'Engineering'
      'HR'
    ],
    _salary: '500000',
    _startDate: '29 Oct 2020',
    _notes: '',
    _id: new Date().getTime(),
    _profilePic: '../asset/profile_images/Ellipse -2.png'
  }
  {
    _name: 'Prasad Juvekar',
    _gender: 'male',
    _department: [
      'Engineering'
      'HR'
    ],
    _salary: '200000',
    _startDate: '20 Oct 2020',
    _notes: '',
    _id: new Date().getTime(),
    _profilePic: '../asset/profile_images/Ellipse -1.png'
  }
}
return empPayrollListLocal;
}

const remove = (node) => {
  let empPayrollData = empPayrollList.find(empData => empData._id == node.id);
  if (!empPayrollData) return;
  const index = empPayrollList
                 .map(empData => empData._id)
                 .indexOf(empPayrollData._id);
  empPayrollList.splice(index, 1);
  localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
  document.querySelector(".emp-count").textContent = empPayrollList.length;
  createInnerHtml();
}