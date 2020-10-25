import React from "react";
import "./style.css";

function Header () {
    return (
        <div className="header">
            <h1>Employee Directory</h1>
            <p>To sort results by first or last name, simply click on the caret symbol or begin to type in the search bar.</p>
        </div>    
    )
}

export default Header;