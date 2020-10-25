import React from "react";
import "./style.css";

function NameSearch(props) {
  return (
    //create search box for finding employees quicker
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search for Employee:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          aria-label="Search"
          type="text"
          className="form-control"
          placeholder="Begin typing to search by name"
        />
        </div>
    </form>
  );
}

export default NameSearch;
