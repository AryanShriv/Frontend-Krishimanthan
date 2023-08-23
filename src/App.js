import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Krishi from "./Pages/Krishi/Krishi";
import Sehkarita from "./Pages/Sehkarita/Sehkarita";
import Pashupalan from "./Pages/Pashupalan/Pashupalan";
import Panchayat from "./Pages/Panchayat/Panchayat";
import Van from "./Pages/Van/Van";
import Epaper from "./Pages/EPaper/Epaper";
import Sankalp from "./Components/Sankalp/Sankalp";

import {Admin} from "./Admin/Admin/Admin"
import {Login} from "./Admin/Login/Login"

import Category from "./Components/Category";
import Subcategory from "./Components/Subcategory";
import NewsDetail from "./Components/NewsDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/adminLogin" element={<Admin />} />
        <Route exact path="/Login" element={<Login />} />
      </Routes>
      <div className="center">
        <Routes>
          <Route exact path="/Krishi" element={<Krishi />} />
          <Route exact path="/Sehkarita" element={<Sehkarita />} />
          <Route exact path="/Pashupalan" element={<Pashupalan />} />
          <Route exact path="/Panchayat" element={<Panchayat />} />
          <Route exact path="/Van" element={<Van />} />
          <Route exact path="/Epaper" element={<Epaper />} />
          <Route exact path="/Sankalp" element={<Sankalp />} />
          <Route path="/category/:categoryName" exact component={Category} />
          <Route
            path="/category/:categoryName/:subcategoryName"
            exact
            component={Subcategory}
          />
          <Route path="/news/:newsId" exact component={NewsDetail} />
          {/* Other routes */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
