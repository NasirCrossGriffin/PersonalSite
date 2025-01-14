import './Projects.css';
import React, { useState, useCallback } from 'react';

function Projects() {

    const projects = [
        {
            name : "Retroresell", 
            image : "/static/Retroresell.jpg", 
            description : "An e-comnmerce store for purchasing retro video games developed in the MERN stack.", 
            link : "http://www.retro-resell.com/storefront/Home"
        },

        {
            name : "OPPST Site", 
            image : "/static/oppst-logo.jpg", 
            description : "A site made to host the Online Philadelphia Pointing Span Test developed using Django and HTMX.", 
            link : "https://docs.google.com/presentation/d/1C48mTB3q1vYIXQIC--kedldmwOEuUba7Y0u6F14XXhg/edit#slide=id.p1"
        }
    ]

    return (
        <div className="Projects">
            <div className="Github">
                <div className="LogoAndLink">
                    <div className="GithubImageContainer">
                        <img src="/static/GitHub-Logo.png" alt="no image"/>
                    </div>
                    <a className="GithubLink" href="https://github.com/NasirCrossGriffin">Check out the source code for all my projects on github!</a>
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
                                <a href={project.link}>Check out {project.name}!</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Projects;