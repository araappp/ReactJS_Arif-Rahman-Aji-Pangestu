import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import FormPage from "./components/FormPage";


function App() {
  return (
    <>
    <div className="App">
      <div className="container">
        <FormPage/>
      </div>
    </div>
    </>
  );
}

export default App;
