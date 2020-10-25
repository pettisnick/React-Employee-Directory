import React, { useState } from "react";

function Table({ employees }) {
  let sortEmployees = employees;
  //useState returns that state (sortBy) of an object that is being maintained,
  //and a function (setSortBy) that you can call to change the state
  const [sortBy, setSortBy] = useState(true);

  const sortColumn = (key) => {
    //call sortEmployees.sort and pass it a sorting function
    sortEmployees.sort(function (a, b) {
      if (sortBy) {
        //if the name property of the first argument is before the second argument, it is positive;
        //if the name property of the first argument is after the second argument, it is negative;
        //if the two name properties are equal, it is 0
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
          {/* Creating and aligning the column titles */}
          <th scope="col"style={{textAlign:"center"}}>Photo</th>
          <th scope="col"style={{textAlign:"center"}}><button type="button" onClick={() => { sortColumn("first") }} className="btn"><i className="fas fa-sort"></i></button>First Name</th>
          <th scope="col"style={{textAlign:"center"}}><button type="button" onClick={() => { sortColumn("last") }} className="btn"><i className="fas fa-sort"></i></button>Last Name</th>
          <th scope="col"style={{textAlign:"center"}}>Email</th>
          <th scope="col"style={{textAlign:"center"}}>Phone</th>
          <th scope="col"style={{textAlign:"center"}}>Age</th>
          </tr>
      </thead>
      <tbody>
        {/* Map takes the sortEmployees array and returns each employee and their value */}
        {/* key is assigned to the employee login username */}
        {sortEmployees.map(employee => {
          return (
            <tr key={employee.login.username}>
              {/* Returns the employee info and aligns the text */}
              <td style={{textAlign:"center"}}><img src={employee.picture.large} alt="employee" className="img-thumbnail" /></td>
              <td style={{textAlign:"center"}}>{employee.name.first}</td>
              <td style={{textAlign:"center"}}>{employee.name.last}</td>
              <td style={{textAlign:"center"}}>{employee.email}</td>
              <td style={{textAlign:"center"}}>{employee.phone}</td>
              <td style={{textAlign:"center"}}>{employee.dob.age}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Table;
