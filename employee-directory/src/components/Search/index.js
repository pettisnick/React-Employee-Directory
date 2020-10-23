import React from "react";
import "./style.css";

//add search box

function Search(props) {
  return (
    <div>
      <input onChange={props.handleChange} value={props.value} />
    </div>
  );
}

export default Search;
