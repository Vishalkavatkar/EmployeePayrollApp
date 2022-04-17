window.addEventListener('DOMContentLoaded', (event) => {
  createInnerHtml();
});
const createInnerHtml = () => {
  const headerHtml = `
    <th></th>
    <th>Name</th>
    <th>Gender</th> 
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>;

  let empPayrollData = createEmployeePayrollJSON()[0];
  const innerHtml = ${headerHtml}
      <tr>
        <td><img class="profile" src="../asset/profile-images/Ellipse -2.png">
        <td>Vishal Kavatkar</td>
        <td>Male</td>
        <td><div class='dept-lable'>HR</div>
            <div class='dept-lable'>Finance</div></td>
        <td>3000000</td>
        <td>01 NOV 2020</td>
        <td>
          <img name="1" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg">
          <img name="1" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
        </td>
      </tr>`;

  }
  document.querySelector('#table-display').innerHTML = innerHtml;
}