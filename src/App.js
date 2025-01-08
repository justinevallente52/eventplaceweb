import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Birthday from './pages/Birthday';
import Pool from './pages/pool';
import Party from './pages/Party';
import Wedding from './pages/Wedding';
import Contact from './pages/Contact';
import Venues from './pages/Venues';
import About from './pages/About';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/venues/birthday" element={<Birthday />} />
          <Route path="/venues/pool" element={<Pool />} />
          <Route path="/venues/party" element={<Party />} />
          <Route path="/venues/wedding" element={<Wedding />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
