import React from "react";
import API from "../../API";
import Table from "../Table";
import Search from "../Search";

class Container extends React.Component {
  //initialize state and where it will store employees
  constructor(props) {
    super(props)
    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    //storing the response from the API in the state
    API.getEmpoloyeeInfo()
      .then((res) => {
        console.log(res);
        this.setState({ employees: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  render() {
    //return the table while passing employees
    return (
      <div className="container">
        <Search />
        <Table employees={this.state.employees} />
      </div>
    );
  }
}

export default Container;

//In Table Index.js - receive employees from Container and then pass it to Body
//Will have the Header of the table in Index.js
//In Body Index.js - create rows w/data (employee info)
