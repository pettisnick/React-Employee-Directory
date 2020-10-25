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
    API.getEmpoloyeeInfo()
      .then((res) => {
        setEmployees(res.data.results);
        setResults(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterEmployees = (term) => {
    return employees.filter(
      (employee) =>
        employee.name.first ||
        employee.name.last ||
        employee.email ||
        employee.phone
    );
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    setResults(filterEmployees(event.target.value));
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
