import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Anime from "./components/Anime";
import Episode from "./components/Episode";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:title" element={<Anime />} />
        <Route path="/anime/episodes/:title" element={<Episode />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;