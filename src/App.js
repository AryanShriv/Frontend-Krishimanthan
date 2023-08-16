import React from "react";
import "./App.css"
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Krishi from "./Pages/Krishi/Krishi";
import Sehkarita from "./Pages/Sehkarita/Sehkarita";
import Pashupalan from "./Pages/Pashupalan/Pashupalan";
import Panchayat from "./Pages/Panchayat/Panchayat";
import Van from "./Pages/Van/Van";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <div className="center">
        <Routes>
          <Route exact path="/Krishi" element={<Krishi />} />
          <Route exact path="/Sehkarita" element={<Sehkarita />} />
          <Route exact path="/Pashupalan" element={<Pashupalan />} />
          <Route exact path="/Panchayat" element={<Panchayat />} />
          <Route exact path="/Van" element={<Van />} />
          {/* Other routes */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
