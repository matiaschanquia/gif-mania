import React, { useState } from "react";
import Gifs from "./components/Gifs";
import Navbar from "./components/Navbar";
import style from "./App.module.css";
import Footer from "./components/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  const clickHandlerAdd = (name, e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=f1dFHKj48ROlNuYQWmMrh8Bml71MGtRe&q=${name}&limit=10&offset=0&rating=pg-13&lang=es`)
    .then((response) => response.json())
    .then((data) => {
      setGifs(data.data)
      setLoading(false);
      if(data.data.length === 0) {
        alert("No existen gifs con ese texto");
      }
    });
  }

  return (
    <div>
      <Navbar clickHandlerAdd={clickHandlerAdd} />
      <Routes>
        <Route path="/home" element={<Gifs gifs={gifs} />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/" element={ <Navigate to="/home" replace/> }/>
      </Routes>
      {
        loading ? <div className={style.loading}> <img src="https://cdn-icons-png.flaticon.com/512/3305/3305803.png" alt="loading"/> </div> : <></>
      }
      <Footer />
    </div>
  );
}

export default App;
