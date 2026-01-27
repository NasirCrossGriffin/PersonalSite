import React, { useEffect } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import { BrowserRouter, Navigate, Routes, Route, redirect} from "react-router-dom";
import "./App.css"
import Systems from './components/Systems';
import Client from './components/Client';

function App() {

  useEffect(() => {
      console.log(process.env.REACT_APP_API_URL)
      if (process.env.NODE_ENV === 'development') {
        console.log('Running in development mode');
      } else if (process.env.NODE_ENV === 'production') {
        console.log('Running in production mode');
      }
    }, []
  )

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
          <Route path="/client" element={<Client />}/> 
          <Route path="/systems" element={<Systems />}/> 
        </Routes>
      </BrowserRouter>
      <div className='background'></div>
    </>
    
  );
}

export default App;
