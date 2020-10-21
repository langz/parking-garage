import React from "react";
import "./App.css";
import "dnb-ui-lib/style";
import HomePage from "./pages/home/HomePage";
import { Heading } from "dnb-ui-lib/components";

const App = () => {
  return (
    <div className="App">
      <Heading>Parking Garage Dashboard</Heading>
      <HomePage />
    </div>
  );
};

export default App;
