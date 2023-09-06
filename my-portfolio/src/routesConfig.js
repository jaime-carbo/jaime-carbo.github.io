import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Curriculum from "./Curriculum";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/curriculum" element={<Curriculum />} />
        </Routes>
    );
}

export default MyRoutes;