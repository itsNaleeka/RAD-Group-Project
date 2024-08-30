import axios from 'axios';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


axios.defaults.baseURL = "http://localhost:8070/"//backend url include

function App() {


  return (
    <div className="App">
     <Router>
          <Navbar />
        <div className='sidearrange'>
        <div className='container2'>
          <Sidebar/>
        </div>  
          <div className='container2'>
          <Routes className="abc">
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About/>} />
              <Route path="/Contact" element={<Contact/>} />
          </Routes>
          </div>
        </div>  
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
