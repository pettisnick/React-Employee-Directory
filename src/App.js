import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <Wrapper>
      <Router>
        <Header />
        <div>
          <Route exact path="/" component={Home} />
        </div> 
      </Router>
    </Wrapper>
  );
}

export default App;
