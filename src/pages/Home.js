import React, { useEffect, useState } from "react";
import API from "../Utils/API";
import Container from "../components/Container";
import NameSearch from "../components/NameSearch";
import Table from "../components/Table";


function Home() {
  //set up State for any variable that we expect to change together
  //useState is expected to return an array 
  const [employees, setEmployees] = useState([]);
  //useState is expected to return a string
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  

  //similar to componentDidMount, makes an API call and render some data as soon as the component loads
  //useEffect takes in a parameter that is a function, and the function runs as soon as the component mounts
  useEffect(() => {
    //'search' represents the current state of our searchState, searchTerm
    if (!search) {
      return;
    }
    //getEmployeeInfo is the API function name 
    API.getEmpoloyeeInfo(search)
      .then((res) => {
        if (res.data.length === 0) {
          //throw error in body of function
          throw new Error("No results found!");
        }
        //if we get an error
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        //set state after we get response and makes app re-render
        setEmployees(res.data.results);
        setResults(res.data.results);
      })
      .catch(err => console.log(err));
      //everytime you type in a new character, you are changing the value of the variable which is prompting the useEffect to run 
  }, [search]);

  const filterEmployees = () => {
    return employees.filter(
      (employee) =>
      //filters through employees and returns employees as requested
        employee.name.first ||
        employee.name.last ||
        employee.email ||
        employee.phone
    );
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    setResults(filterEmployees(e.target.value));
  };

  return (
    <div>
      <Container>
        <NameSearch search={search} handleInputChange={handleInputChange} />
        <Table employees={results} />
      </Container>
    </div>
  );
}

export default Home;
