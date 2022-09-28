import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbarrr from "./components/navbarrr";
import Home from "./components/home";
import AboutApp from "./components/aboutapp";
import AboutAuthor from "./components/aboutauthor";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbarrr />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="aboutApp" element={<AboutApp/>}/>
          <Route path="aboutAuthor" element={<AboutAuthor/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
