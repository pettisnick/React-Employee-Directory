import React from 'react';
import './App.css';
import Search from "./components/Search";
import Container from "./components/Container";
import Table from "./components/Table";

function App() {
  return (
    <div>
    <Container>
      <Search />
      <Table />
    </Container>  
    </div>
  );
}

export default App;


