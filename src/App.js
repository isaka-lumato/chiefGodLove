import "./App.css";
import "./styles/modern.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import NavbarModern from "./Pages/Home/NavbarModern";
import NavbarMinimal from "./Pages/Home/NavbarMinimal";
import Home from "./Pages/Home/Homescreen";
import LogoLoader from "./Pages/Home/logo_loader";
import { SpeedInsights } from "@vercel/speed-insights/react"
import CustomCursor from "./components/CustomCursor";
import CreativeBackground from "./components/CreativeBackground";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LogoLoader />;

  return (
    <div className="App">
      <CreativeBackground />
      <CustomCursor />
      
      {/* Promotional Floating Badge */}
      <a href="tel:0752245296" className="promo-badge">
        <div className="badge-icon">📞</div>
        <div className="promo-badge-text">
          <span className="badge-title">Want a website like this?</span>
          <span className="badge-phone">Call 0752245296</span>
        </div>
      </a>

      <Router>
        <div>
          <NavbarMinimal />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
          <SpeedInsights />
        </div>
      </Router>
    </div>
  );
}

export default App;
