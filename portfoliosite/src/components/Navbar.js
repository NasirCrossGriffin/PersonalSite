import './Navbar.css';
import { Link } from 'react-router-dom';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

function Navbar() {
    const linkRef = useRef(null);
    //const [isHovered, setIsHovered] = useState(false)
    const [links, setLinks] = useState([
        {page : "About", link : "/about", isHovered : false, linkRef : React.createRef()},
        {page : "Projects", link : "/projects", isHovered : false, linkRef : React.createRef()},
        {page : "Contact", link : "/contact", isHovered : false, linkRef : React.createRef()},
        {page : "Blog", link : "https://www.nasirsblog.com", isHovered : false, linkRef : React.createRef()},
    ])

    const handleMouseEnter = (index) => {
        setLinks((prevLinks) =>
          prevLinks.map((link, i) =>
            i === index ? { ...link, isHovered: true } : link // Update only the hovered link
          )
        );
      };
    
      const handleMouseLeave = (index) => {
        setLinks((prevLinks) =>
          prevLinks.map((link, i) =>
            i === index ? { ...link, isHovered: false } : link // Reset only the hovered link
          )
        );
      };

    return (
        <div className="navContainer"> 
            <div className="NavBar">
                {
                    links.map((link, index) => (
                        <CSSTransition 
                            nodeRef={link.linkRef} 
                            in={link.isHovered} 
                            timeout={300} 
                            classNames="link-node"
                        >    
                            <Link onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)} ref={link.linkRef} variant="primary" dismissible to={link.link} className="Link">{link.page}</Link>
                        </CSSTransition>
                    ))
                }
            </div>
            <div className="NavSeparator"></div>
        </div>
        
    );

    
}

export default Navbar;