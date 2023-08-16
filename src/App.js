import './App.css';
// import './Styling/Navbar.css';
// import './Styling/Footer.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Preloader from './Components/Preloader';
import Home from './Routes/Home';
import About from './Routes/About';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop'; 


function App() {
  const [loading, setLoading] = useState(true);
  window.onload = () => {
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/Sneaker-Realm" element={<Home />} />
            <Route path="/Sneaker-Realm/About" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      )}
      
    </>
  );
}

export default App;