import React from "react";
import "./style.css";

function NameSearch(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search Employee:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Serach by First Name, Last Name, Email or Phone"
          id="term"
        />
        </div>
    </form>
  );
}

export default NameSearch;
