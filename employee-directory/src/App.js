import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";

function App() {
  return (
    <Wrapper>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    </Wrapper>
  );
}

export default App;
