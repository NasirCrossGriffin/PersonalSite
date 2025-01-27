import './About.css';
import React, { useState, useCallback } from 'react';

function LandingPage() {
    const Sections = [
        {
            name: "EDUCATION", 
            headerimage: "/static/open-book-icon-symbol-vector-free-vector-silhouette-graphics-ai-open-book-silhouette-png-800_800.png", 
            image: "/static/i.png", 
            text:"I graduated from Rowan University in 2024 with my Bachelor's of Science in Computer Science. Classes such as Data Structures and Algorithms, as well as Object Oriented Programming and Data Abstraction equipped me with knowledge of essential programming concepts. The Rowan curriculum prepared me for work in industry, Rowan provided me with opportunity to develop a Dynamic Tracing Tools Testing Envirnonment for ASRC Federal, as well as a trade study to display my findings from my own use of the tool. For my Senior Project, I and a team of other students developed a full stack website to host the Online Philadelphia Pointing Span Test. To conclude, I have undergone and completed formal education in the field of computer science." 
        },

        {
            name: "SKILLS", 
            headerimage: "/static/68984377806c969d9504f0faaaede75f-computer-silhouette.webp", 
            image: "/static/1693764088119.png", 
            text:"I am a full stack web developer, meaning I am capable of developing both frontend UIs and Backend APIs. My expertise is in the MERN stack with most of my projects being completed in this stack, including this very portfolio site. Despite my expertise being in the MERN stack, I have experience with other frontend frameworks like Angular and HTMX. I also have experience with other backend frameworks like django and spring-boot. I am extremely well versed in the HTML5 markup-language, and am experienced in creating CSS3 style-sheets. All of the code for my projects and even this site may be found on my github linked on the projects page. An extensive list of all of my projects and the technologies I used to build them can be found on the projects page as well." 
        },

        {
            name: "EXPERIENCE", 
            headerimage: "/static/238388.png", 
            image: "/static/logo-artboard_2_4x_4x.webp", 
            text:"As a junior developer and new graduate, I am looking for opportunities to gain experience in the industry and am actively seeking employment opportunities. I do however still have experience developing full stack web applications and deploying them through the personal projects I have debeloped, as well as throught the various projects I completed at Rowan University. I have experience working on a team wth the SRUM framework througb my work with ASRC Federal on a Dynamic Tracing Tools Testing Environment." 
        },
    ]

    return(
        <div className="AboutPage">
            <h1 className="header">NASIR GRIFFIN</h1>

            <div className="LinkedIn">
                <div className="LinkedInLogoAndLink">
                    <div className="LinkedInImageContainer">
                        <img src="/static/LinkedIn_icon.svg.webp" alt="no image"/>
                    </div>
                    <a className="LinkedInLink" href="https://www.linkedin.com/in/nasir-cross-griffin-a87b98303/">LINKEDIN</a>
                </div>
            </div>

            <div className="About">
                {
                    Sections.map((section, index) => (
                        <div className="SectionContainer">
                            <div className="NameAndLogo">
                                <div className="SectionLogoContainer">
                                    <img src={section.headerimage} />
                                </div>
                                <h1 className="SectionName">{section.name}</h1>
                            </div>
                            <div className="SectionSeparator"></div>
                            <div className="TextAndImageContainer">
                                <div className="SectionImageContainer">
                                    <img src={section.image} />
                                </div>
                                <p>{section.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default LandingPage;