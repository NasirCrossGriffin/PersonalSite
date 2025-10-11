import './Projects.css';
import React, { useState, useCallback, useRef, useEffect } from 'react';

function Projects() {

    const projects = [
        {
            name : "GET YOUR START", 
            image : "/static/GetYourStart.png", 
            description : "Get your start is an application to help those who are struggling to break into the workforce during this difficult period where entry level jobs are disappearing. This application aggregates output from multiple job APIs and filters them to return true entry level jobs. Users can save jobs they're interested in to their personal list of saved jobs.", 
            languages : ["/static/logos/Java.png", "/static/logos/Typescript.png"],
            frontend : ["/static/logos/Angular.png"],
            backend : ["/static/logos/Spring-Boot.png"],
            database : ["/static/logos/Postgresql.png"],
            link : "https://www.get-your-start.com"
        },

        /*
        {
            name : "RETRORESELL UNDER CONSTRUCTION", 
            image : "/static/Retroresell.jpg", 
            description : "An e-comnmerce store for purchasing retro video games developed in the MERN stack.", 
            languages : ["/static/logos/Javascript.webp"],
            frontend : ["/static/logos/React.png"],
            backend : ["/static/logos/NJS.png"],
            database : ["/static/logos/Mongodb.png"],
            link : "http://www.retro-resell.com"
        },
        */

        {
            name : "OPPST SITE", 
            image : "/static/oppst-logo.jpg", 
            description : "A site made to host the Online Philadelphia Pointing Span Test developed using Django and HTMX.", 
            languages : ["/static/logos/Python.png", "/static/logos/Javascript.webp"],
            frontend : ["/static/logos/Htmx.png"],
            backend : ["/static/logos/Django.png"],
            database : ["/static/logos/SQLite3.webp"],
            link : "https://docs.google.com/presentation/d/1C48mTB3q1vYIXQIC--kedldmwOEuUba7Y0u6F14XXhg/edit#slide=id.p1"
        },

        {
            name : "MYRPG", 
            image : "/static/MyRPG.png", 
            description : "A social media and self-improvement app where users can make an account and share their different experiences. By sharing more experiences, users can increase their stats for the class they chose for their account, and increase their level.", 
            languages : ["/static/logos/Java.png", "/static/logos/Typescript.png"],
            frontend : ["/static/logos/Angular.png"],
            backend : ["/static/logos/Spring-Boot.png"],
            database : ["/static/logos/MSQ.png"],
            link : "https://myrpgapp.com"
        }
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
        <div className="Projects Fade-In">
            <div className='InitialSection'>
                <h1 className="ProjectsBanner">PROJECTS</h1>
                <h2>SCROLL DOWN</h2>
                <div className="Github">
                    <div className="GithubLogoAndLink">
                        <div className="GithubImageContainer">
                            <img src="/static/GitHub-Logo.png" alt="no image"/>
                        </div>
                        <a className="GithubLink" href="https://github.com/NasirCrossGriffin" target="_blank">GITHUB</a>
                    </div>
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
                                <div className='Technologies'>
                                    <div className='Languages'>
                                        <h1 className="TechnologyType">LANGUAGES</h1>
                                        <div className='LanguageContainer'>
                                            {
                                                project.languages.map((language, index) => (
                                                    <div className="TechnologyCont">
                                                        <img src={language} />
                                                    </div>
                                                ))
                                            }   
                                        </div>
                                    </div>

                                    <div className='Frontend'>
                                        <h1 className="TechnologyType">FRONTEND</h1>
                                        <div className='FrontendContainer'>
                                            {
                                                project.frontend.map((framework, index) => (
                                                    <div className="TechnologyCont">
                                                        <img src={framework} />
                                                    </div>
                                                ))
                                            }   
                                        </div>
                                    </div>

                                    <div className='Backend'>
                                        <h1 className="TechnologyType">BACKEND</h1>
                                        <div className='BackendContainer'>
                                            {
                                                project.backend.map((framework, index) => (
                                                    <div className="TechnologyCont">
                                                        <img src={framework} />
                                                    </div>
                                                ))
                                            }   
                                        </div>
                                    </div>

                                    <div className='Database'>
                                        <h1 className="TechnologyType">DATABASE</h1>
                                        <div className='DatabaseContainer'>
                                            {
                                                project.database.map((dbms, index) => (
                                                    <div className="TechnologyCont">
                                                        <img src={dbms} />
                                                    </div>
                                                ))
                                            }   
                                        </div>
                                    </div>
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

export default Projects;