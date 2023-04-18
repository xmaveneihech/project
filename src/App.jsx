import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Movie from "./components/Movie";
import Cartoons from "./components/Cartoons";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/movie" element={<Movie />} />
          <Route path="/cartoons" element={<Cartoons />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;
