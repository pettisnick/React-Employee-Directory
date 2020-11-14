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
    //getEmployeeInfo is the API function name
    API.getEmpoloyeeInfo()
      .then((res) => {
        //set state after we get response and makes app re-render
        setEmployees(res.data.results);
        setResults(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
    //everytime you type in a new character, you are changing the value of the variable which is prompting the useEffect to run
  }, []);

  //value is what the user has typed
  const filterEmployees = (value) => {
    return employees.filter(
      (employee) =>
        //filter the employee array and build a new array
        //give statement that returns true if we want to add word to the array or false if we don't
        //toLowerCase() converts a string to lowercase letters; and trim() removes whitespace from both sides of a string. || means 'or'
        employee.name.first.toLowerCase().trim().indexOf(value.toLowerCase()) > -1 ||
        employee.name.last.toLowerCase().trim().indexOf(value.toLowerCase()) > - 1 ||
        employee.email.toLowerCase().trim().indexOf(value.toLowerCase()) > - 1 
    );
  };

  //event is typing in the letters
  //target is the input
  //value is what has been typed
  const handleInputChange = (e) => {
    console.log(e);
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
