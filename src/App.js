import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import { BrowserRouter, Navigate, Routes, Route, redirect} from "react-router-dom";

function App() {
  return (
    <> 
      <BrowserRouter basename="/nasirgriffin" future={{ v7_startTransition: true }}> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>}/>
          <Route path="/home" element={<LandingPage />}/> 
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/> 
          <Route path="/projects" element={<Projects />}/> 
          <Route path="/resume" element={<Resume />}/> 
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
