import React, { useState } from "react";

function Table({ employees }) {
  let sortedEmployees = employees;
  const [sortBy, setSortBy] = useState(true);

  const sortColumn = (key) => {
    sortedEmployees.sort(function (a, b) {
      if (sortBy) {
        return (a.name[key] > b.name[key]) ? 1 : ((a.name[key] < b.name[key]) ? -1 : 0);
      } else {
        return (b.name[key] > a.name[key]) ? 1 : ((b.name[key] < a.name[key]) ? -1 : 0);
      }
    });
    setSortBy(!sortBy);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Photo</th>
          <th scope="col"><button type="button" onClick={() => { sortColumn("first") }} className="btn"><i className="fas fa-sort"></i></button>First Name</th>
          <th scope="col"><button type="button" onClick={() => { sortColumn("last") }} className="btn"><i className="fas fa-sort"></i></button>Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          {/*<th scope="col">Years with Company</th>*/}
        </tr>
      </thead>
      <tbody>
        {sortedEmployees.map(employee => {
          return (
            <tr key={employee.login.username}>
              <td><img src={employee.picture.large} alt="employee" className="img-thumbnail" /></td>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              {/*<td>{employee.dob.birthdate}</td> */}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Table;
