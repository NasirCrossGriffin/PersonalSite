import './LandingPage.css';
import React, { useState, useRef, useCallback,useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

function LandingPage() {
    const welcomeRef = useRef(null);
    const navigateRef = useRef(null);
    const [showWelcome, setShowWelcome] = useState(false);
    const [showNavigate, setShowNavigate] = useState(false);

    useEffect(() => {
        setShowWelcome(true);
      }, []);


    useEffect(() => {
        if (showWelcome === true) {
            setShowNavigate(false)
            const timeoutId = setTimeout(() => {
            setShowWelcome(false)
            }, 5000);
        
            return () => clearTimeout(timeoutId); // Clear the timeout on unmount
        }
      }, [showWelcome]);

      useEffect(() => {
        if (showNavigate === true) {
            setShowWelcome(false)
            const timeoutId = setTimeout(() => {
            setShowNavigate(false)
            }, 5000);
        
            return () => clearTimeout(timeoutId); // Clear the timeout on unmount
        }
      }, [showNavigate]);

    return(
        <div className="container">
            <div className="LandingPage Fade-In Slide-Up">
                <div className='LandingPageText'>
                    <div className="Introduction">
                        <h1 className='IntroductionText'>NASIR GRIFFIN<br/>SOFTWARE ENGINEER</h1>
                    </div>
                    <div className="Welcome">
                        <CSSTransition 
                            nodeRef={welcomeRef} 
                            in={showWelcome} 
                            timeout={1000} 
                            classNames="welcome-node"
                            unmountOnExit
                            onExited={() => setShowNavigate(true)}
                        >    
                            <h1 className="header1" ref={welcomeRef} variant="primary" dismissible>WELCOME</h1>
                        </CSSTransition>

                        <CSSTransition 
                            nodeRef={navigateRef} 
                            in={showNavigate} 
                            timeout={1000} 
                            classNames="Navigate-node"
                            unmountOnExit
                            onExited={() => setShowWelcome(true)}
                        >
                            <h2 className="header2" ref={navigateRef} variant="primary" dismissible>PLEASE USE THE NAVBAR TO NAVIGATE.</h2>
                        </CSSTransition>
                    </div>
                </div>
                <div className='PortraitContainer'>
                    <img src='/static/pngimg.com - griffin_PNG48.png' alt="Portrait" className="Portrait"/>
                </div>
                
            </div>
        </div>
    );
}

export default LandingPage;