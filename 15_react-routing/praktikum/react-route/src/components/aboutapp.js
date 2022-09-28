import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutApp() {
 
  return (
    <>
    <br/><br/><br/><br/>
    <div className="container">
  <h1> About The APP </h1>
  <p>In this app. you can add, delete, submit, and edit items. simply double click on it. once your are done press the enter key to resubmit. 
    this app will presist your data in the browser local storage. so Where you reload, close your app or reopened it. you still have access to 
    your todos items.
  </p>
  </div>
  </>
  );
}

export default AboutApp;