import './App.css';
// import './Styling/Navbar.css';
// import './Styling/Footer.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import About from './Routes/About';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop'; 


function App() {
  return (
    <>
      <Router>
        <ScrollToTop /> {/* This component will handle scrolling to the top */}
        <Navbar /> 
        <Routes>
          <Route path="/Sneaker-Realm" element={<Home />} />
          <Route path="/Sneaker-Realm/About" element={<About />} />
          {/* <Route path="/Mighty-Rajasthan/Contact" element={<Contact />} /> */}
        </Routes>
        <Footer /> 
      </Router>
     
      
    </>
  );
}

export default App;