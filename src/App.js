import React, { Fragment } from "react";
import Navbar from "./components/navbar";
import Display from "./components/productDisplay";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Display />
    </Fragment>
  );
}

export default App;
