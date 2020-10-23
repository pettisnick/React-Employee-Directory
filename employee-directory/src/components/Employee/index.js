import React from "react";

export default function Employee({ image, name, email, phone, birthdate }) {
  return (
    <tr>
      <td>{image}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{birthdate}</td>
    </tr>
  );
}


