import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Anime from "./components/Anime";
import Episode from "./components/Episode";
import Trending from "./components/Trending";
import Movie from "./components/Movie";
import About from "./components/About";
import Home from "./components/Home";
import Genre from "./components/Genre";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/genre/:title" element={<Genre />} />
        <Route path="/watch/:title" element={<Episode />} />
        <Route path="/anime/:title" element={<Anime />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;