import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import { BrowserRouter, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter basename="/nasirgriffin" future={{ v7_startTransition: true }}>
        <Routes>
          <Route path="/" /> {shouldRedirect && <Navigate to="/home" replace={true} />} 
          <Route path="/home" /> {<LandingPage />}
          <Route path="/about" /> {<About />}
          <Route path="/contact" /> {<Contact />}
          <Route path="/projects" /> {<Projects />}
          <Route path="/resume" /> {<Resume />}
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
