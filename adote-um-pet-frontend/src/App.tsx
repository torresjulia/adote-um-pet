import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PetDetails from "./pages/PetDetails";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pet/:id" element={<PetDetails />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
