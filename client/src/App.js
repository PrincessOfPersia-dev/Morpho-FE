import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import AboutPage from "./components/AboutPage/AboutPage";



function App() {

    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/about" element={<AboutPage />} />
  
                    
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
