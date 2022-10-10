import React, { useState, useMemo } from "react";
import "./App.css";
import Home from "./container/home/home";
import Movie from "./container/movie/movie";
import "./styles/main.scss";
import { Routes, Route } from "react-router-dom";
import CheckConnection from "./CheckConnect";


function App() {
  const[isOnline,setIsOnline]=useState(false);
  return (
    <>
    <CheckConnection setIsOnline={setIsOnline}></CheckConnection><div className="relative">
      <Routes>
        <Route path="/" element={
          useMemo(()=>( <Home isOnline={isOnline} />),[isOnline])
       
        } />
        <Route path="movie/:id" element={useMemo(()=>( <Movie isOnline={isOnline} />),[isOnline])} />
      </Routes>
    </div></>
    
  );
}

export default App;
