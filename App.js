import React from "react";
import { Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Details from "./components/Details";

function App() {
  return (
   
      
      <Routes>
        <Route path="/" element={<Card />} />       
        <Route path="/details/:id" element={<Details />} />  
      </Routes>
   
  );
}

export default App;
