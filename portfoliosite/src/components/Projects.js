import './Projects.css';
import React, { useState, useCallback } from 'react';

function Projects() {

    const projects = [
        {
            name : "RETRORESELL", 
            image : "/static/Retroresell.jpg", 
            description : "An e-comnmerce store for purchasing retro video games developed in the MERN stack.", 
            languages : ["/static/logos/Javascript.webp"],
            frontend : ["/static/logos/React.png"],
            backend : ["/static/logos/NJS.png"],
            database : ["/static/logos/Mongodb.png"],
            link : "http://www.retro-resell.com/storefront/Home"
        },

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
            name : "MYRPG UNDER DEVELOPMENT", 
            image : "/static/MyRPG.png", 
            description : "A self-improvement app allowing users to log progress and track personal development metrics.", 
            languages : ["/static/logos/Java.png", "/static/logos/Typescript.png"],
            frontend : ["/static/logos/Angular.png"],
            backend : ["/static/logos/Spring-Boot.png"],
            database : ["/static/logos/MSQ.png"],
            link : "https://github.com/NasirCrossGriffin/MyRPG"
        }
    ]

    return (
        <div className="Projects">
            <h1 className="ProjectsBanner">PROJECTS</h1>
            <div className="Github">
                <div className="GithubLogoAndLink">
                    <div className="GithubImageContainer">
                        <img src="/static/GitHub-Logo.png" alt="no image"/>
                    </div>
                    <a className="GithubLink" href="https://github.com/NasirCrossGriffin">GITHUB</a>
                </div>
            </div>

            <div className="ListOfProjects">
                {  
                    projects.map((project, index) => (
                        <div key={index} className="ProjectContainer">
                            <div className="Project">
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
                                <a className="ProjectLink" href={project.link}>CHECK OUT {project.name}</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Projects;