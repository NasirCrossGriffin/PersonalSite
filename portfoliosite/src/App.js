import React, { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { BrowserRouter, Navigate, Routes, Route, redirect} from "react-router-dom";
import "./App.css"
import Systems from './components/Systems';
import Client from './components/Client';

function App() {
  const [orientation, setOrientation] = useState('');

  useEffect(() => {
    function determineOrientation() {
      window.innerWidth > window.innerHeight ? setOrientation('landscape') : setOrientation('portrait')
    }

    const isBrowserFullscreen = () => {
        return (
            window.outerWidth === window.screen.availWidth &&
            window.outerHeight === window.screen.availHeight
        );
    };

    const setHeight = () => {
        const height = window.visualViewport?.height ?? window.innerHeight;

        console.log(height);

        document.documentElement.style.setProperty("--app-height", `${height}px`);
    };
  
    const setWidth = () => {
        const width = window.visualViewport?.width ?? window.innerWidth;

        console.log(width);

        document.documentElement.style.setProperty("--app-width", `${width}px`);
    };

    const setPageHeight = () => {
        const pageHeight = document.documentElement.scrollHeight;

        document.documentElement.style.setProperty(
            "--page-height",
            `${pageHeight}px`
        );

        console.log(pageHeight);
    };

    const resetPageHeight = () => {
      document.documentElement.style.setProperty(
          "--page-height",
          `${0}px`
      );
      
      console.log(document.documentElement.style.getPropertyValue(
          "--page-height"
      ));
    };
  
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setHeight();
        setWidth();
        resetPageHeight();
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setPageHeight();
            determineOrientation();
          })
        });
      });
    });

    function handleViewportChange() {
        // Let mobile Chrome finish resizing after orientation/UI changes
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setHeight();
            setWidth();
            resetPageHeight();
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                setPageHeight();
                determineOrientation();
              })
            });
          });
        });
      }
  
    window.screen.orientation.addEventListener("change", (event) => {
        handleViewportChange();
    });

    document.addEventListener("fullscreenchange", () => {
      handleViewportChange();
      console.log("fullscreen")
    });

    let previousFullscreen = isBrowserFullscreen();

    window.addEventListener("resize", () => {
      const currentFullscreen = isBrowserFullscreen();
  
      if (currentFullscreen !== previousFullscreen) {
          previousFullscreen = currentFullscreen;
          console.log("browser fullscreen changed");
          handleViewportChange();
      }
    });

    const resizeObserver = new ResizeObserver(() => {
        resetPageHeight();
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setPageHeight();
            determineOrientation();
          })
        });
    });

    resizeObserver.observe(document.body);

    const isMobile = window.matchMedia("(pointer: coarse)").matches;

    let maxSeenHeight = 0;

    const setMobileAppHeight = () => {
      const currentHeight = window.visualViewport?.height || window.innerHeight;

      // Only grow height, never shrink it
      if (currentHeight > maxSeenHeight) {
        maxSeenHeight = currentHeight;

        document.documentElement.style.setProperty(
          "--app-height",
          `${maxSeenHeight}px`
        );
      }
    };

    if (isMobile) {
      setMobileAppHeight();

      setTimeout(setMobileAppHeight, 300);
      setTimeout(setMobileAppHeight, 800);
      setTimeout(setMobileAppHeight, 1500);

      window.visualViewport?.addEventListener("resize", setMobileAppHeight);
      window.addEventListener("orientationchange", () => {
        maxSeenHeight = 0;
        setTimeout(setMobileAppHeight, 500);
      });

      return () => {
        window.visualViewport?.removeEventListener("resize", setMobileAppHeight);
      };
    }
  }, []);

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
          <Route path="/client" element={<Client orientation={orientation} />}/> 
          <Route path="/systems" element={<Systems />}/> 
        </Routes>
      </BrowserRouter>
      <div className='background'></div>
    </>
    
  );
}

export default App;
