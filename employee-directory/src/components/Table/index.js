import React from "react";
import "./style.css";
import Employee from "../Employee";

function Table(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Birthday</th>
          </tr>
        </thead>
        {props.employees.map((employee, i) => (
          <Employee
            key={i}
            image={employee.picture.large}
            name={employee.name.first + employee.name.last}
            email={employee.email}
            phone={employee.phone}
            birthdate={employee.dob.date}
          />
        ))}
      </table>
    </div>
  );
}

export default Table;
