import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Anime from "./components/Anime";
import Episode from "./components/Episode";
import Trending from "./components/Trending";
import Latest from "./components/Latest";
import About from "./components/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:title" element={<Anime />} />
        <Route path="/watch/:title" element={<Episode />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;