import React, { useEffect, useState } from "react";
import API from "../Utils/API";
import Container from "../components/Container";
import NameSearch from "../components/NameSearch";
import Table from "../components/Table";

function Home() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    //using the employee info from the API 
    API.getEmpoloyeeInfo()
      .then((res) => {
        //returns the employees and all the results
        setEmployees(res.data.results);
        setResults(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

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
