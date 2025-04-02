import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "boxicons";
import App from "./App.jsx";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import Home from "./Pages/Home/Home.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import Adoptions from "./Pages/Adoptions/Adoptions.jsx";
import Donations from "./Pages/Donations/Donations.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/inicio" element={<Home />} />
                <Route path="/adopciones" element={<Adoptions />} />
                <Route path="/donaciones" element={<Donations />} />
                <Route path="/nosotros" element={<AboutUs />} />
                <Route path="/contáctanos" element={<ContactUs />} />
            </Routes>
            <Footer/>
        </Router>
    </StrictMode>
);
