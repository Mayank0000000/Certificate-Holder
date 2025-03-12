import React from "react";
import "./App.css";
import AddDetails from "./Components/AddDetails/AddDetails.js";
import Results from "./Components/Results/Results.js";
import { Container } from "react-bootstrap";

const App: React.FC = () => {
  return (
    <>
      <Container className="heading">
        <span className="title"> Skills-Based Certifications</span> <br />
        <span> (You can add upto 5 certifications)</span>
      </Container>

      <Container className="main__container">
        <AddDetails />
        <Results />
      </Container>
    </>
  );
};

export default App;
