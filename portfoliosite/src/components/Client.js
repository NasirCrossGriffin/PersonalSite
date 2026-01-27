import './Projects.css';
import React, { useState, useCallback, useRef, useEffect } from 'react';

function Client() {

    const projects = [
        {
            name : "TRINITY SILVA MODEL PAGE", 
            image : "/static/trinitysilva.png", 
            description : `I partnered with Trinity Silva to create a polished portfolio website that positioned her as 
            a serious, professional model rather than just a social media presence. I handled the full build, deployment, 
            and hosting, giving her a centralized platform to showcase her work, aesthetic, and versatility to brands and 
            collaborators. The site elevated her personal brand, provided a professional point of contact, and gave her a 
            long-term asset she can confidently share with agencies and clients.`, 
            link : "https://www.trinitysilva.com"
        },

        {
            name : "JD MULTIPROCESS AND SERVICES WEBPAGE", 
            image : "/static/Jdmultiprocessandservices.png", 
            description : `I worked with Juliana De La Rosa to build a professional online presence that clearly 
            communicated her notary and multi-service offerings and established immediate credibility with new clients. 
            I designed, deployed, and fully managed her website so potential customers could quickly understand her 
            services, trust her legitimacy, and contact her without friction. The result was a clean, reliable digital 
            foundation that strengthened her brand and made it easier for clients to find and choose her services.`, 
            link : "https://www.jdmultiprocessandservices.com"
        },
    ]
        const projectRefs = useRef(projects.map(() => React.createRef()));
        const visibilityList = (projectRefs.current.map((ref) => ({ ref: ref, visibility: false })));
        const [visibilityState, setVisibilityState] = useState(visibilityList);
        const [observer, setObserver] = useState(null);
        

        useEffect(() => {
                window.scrollTo(0, 0)
                
                console.log("Section refs after mount:", projectRefs.current.map(ref => ref.current));
                console.log(projectRefs)
                if (observer === null) {
                    setObserver(new IntersectionObserver((entries) => {
                        entries.forEach((entry) => {
                            console.log(entry.target)
                            if (entry.isIntersecting) {
                                var index = 0;
                                projectRefs.current.forEach((ref) => {
                                    if (entry.target === ref.current) {
                                        console.log("project " + index + " is currently intersecting")
                                        visibilityList[index].visibility = true;
                                        const updatedVisibilityList = []
                                        visibilityList.forEach((item) => updatedVisibilityList.push(item))
                                        setVisibilityState(updatedVisibilityList)  
                                    } 
                                    index++;
                                }) 
                            } else {
                                var index = 0;
                                projectRefs.current.forEach((ref) => {
                                    if (entry.target === ref.current) {
                                        console.log("section " + index + " is currently not intersecting")
                                        visibilityList[index].visibility = false;
                                        const updatedVisibilityList = []
                                        visibilityList.forEach((item) => updatedVisibilityList.push(item))
                                        setVisibilityState(updatedVisibilityList)    
                                    } 
                                    index++;
                                }) 
                            }
        
                            console.log(visibilityList) 
                        })
                    }, { threshold : 0.60}));
                }
            }, [])
        
            useEffect(() => {
                console.log(visibilityState); // This will log the updated state
            }, [visibilityState]); // Runs whenever visibilityList updates
        
            useEffect(() => {
                if (observer !== null) {
        
                    console.log(observer)
        
                    projectRefs.current.forEach((ref) => {
                        console.log(ref.current)
                        observer.observe(ref.current)
                    });
                }
            }, observer)

    return (
        <div className="Projects">
            <div className="InitialSection Fade-In" >
                <div class="Information">
                    <h1 className="header">CLIENT SERVICES</h1>
                    <div className="divider"></div>
                    <div className="PageDetails">
                        <h2>MANAGED WEB SOLUTIONS PROVIDER</h2>
                        <p>
                            I build and manage production-ready websites for small businesses and personal brands. 
                            Each site is fully handled end-to-end, including development, hosting, and ongoing maintenance. 
                            Clients get a reliable online presence without having to manage any technical details.
                        </p>
                    </div>
                </div>                    
                
                <div class="Handshake">
                        <img src="/static/handshake.png" />
                </div>
            </div>

            <div className="ListOfProjects">
                {  
                    projects.map((project, index) => (
                        <div key={index} className="ProjectContainer" ref={projectRefs.current[index]}>
                            <div className={`Project ${visibilityState[index].visibility ? "Slide-Up" : "Fade-Out"}`}>
                                <p className="ProjectName">{project.name}</p>
                                <div className="ImgAndDesc">
                                    <div className="ProjectImageContainer">
                                        <img src={project.image} alt="no image"/>
                                    </div>
                                    <p className="ProjectDesc">{project.description}</p>
                                </div>
                                <a className="ProjectLink" href={project.link} target="_blank">CHECK OUT {project.name}</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Client;