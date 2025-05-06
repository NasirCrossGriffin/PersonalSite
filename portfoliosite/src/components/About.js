import './About.css';
import React, { useState, useRef, useEffect, useCallback } from 'react';

function LandingPage() {
    
    const [observer, setObserver] = useState(null);
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
            text:"I am a full stack web developer, meaning I am capable of developing both frontend UIs and Backend APIs. My expertise is in the MERN stack with most of my projects being completed in this stack, including this very portfolio site. Despite my expertise being in the MERN stack, I have experience with other frontend frameworks like Angular and HTMX. I also have experience with other backend frameworks like django and spring-boot. I am extremely well versed in the HTML5 markup-language, and am experienced in creating CSS3 style-sheets. Most of my projects use AWS cloud technology to host files and even databases, through this experience I have learned to leverage cloud technology to power applications. All of the code for my projects and even this site may be found on my github linked on the projects page. An extensive list of all of my projects and the technologies I used to build them can be found on the projects page as well." 
        },

        {
            name: "EXPERIENCE", 
            headerimage: "/static/238388.png", 
            image: "/static/logo-artboard_2_4x_4x.webp", 
            text:"As a junior developer and new graduate, I am looking for opportunities to gain experience in the industry and am actively seeking employment opportunities. I do however still have experience developing full stack web applications and deploying them through the personal projects I have debeloped, as well as through the various projects I completed at Rowan University. I have experience working on a team with the SCRUM framework through my work with ASRC Federal on a Dynamic Tracing Tools Testing Environment." 
        },
    ]
    const sectionRefs = useRef(Sections.map(() => React.createRef()));
    const visibilityList = (sectionRefs.current.map((ref) => ({ ref: ref, visibility: false })));
    const [visibilityState, setVisibilityState] = useState(visibilityList);


    useEffect(() => {
        window.scrollTo(0, 0);

        console.log("Section refs after mount:", sectionRefs.current.map(ref => ref.current));
        console.log(sectionRefs)
        if (observer === null) {
            setObserver(new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    console.log(entry.target)
                    if (entry.isIntersecting) {
                        var index = 0;
                        sectionRefs.current.forEach((ref) => {
                            if (entry.target === ref.current) {
                                console.log("section " + index + " is currently intersecting")
                                visibilityList[index].visibility = true;
                                const updatedVisibilityList = []
                                visibilityList.forEach((item) => updatedVisibilityList.push(item))
                                setVisibilityState(updatedVisibilityList)  
                            } 
                            index++;
                        }) 
                    } else {
                        var index = 0;
                        sectionRefs.current.forEach((ref) => {
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

            sectionRefs.current.forEach((ref) => {
                console.log(ref.current)
                observer.observe(ref.current)
            });
        }
    }, observer)

    return(
        <div className="AboutPage">
            <div className="InitialSection Fade-In" >
                <h1 className="header">NASIR GRIFFIN</h1>
                <h2>SCROLL DOWN</h2>
                

                <div className="LinkedIn">
                    <div className="LinkedInLogoAndLink">
                        <div className="LinkedInImageContainer">
                            <img src="/static/LinkedIn_icon.svg.webp" alt="no image"/>
                        </div>
                        <a className="LinkedInLink" href="https://www.linkedin.com/in/nasir-cross-griffin-a87b98303/" target="_blank">LINKEDIN</a>
                    </div>
                </div>
            </div>

            <div className="About">
                {
                    Sections.map((section, index) => (
                        <div className="SectionContainer" ref={sectionRefs.current[index]} id={index} >
                            <div className="NameAndLogo">
                                <div className="SectionLogoContainer">
                                    <img src={section.headerimage} />
                                </div>
                                <h1 className="SectionName">{section.name}</h1>
                            </div>
                            <div className="SectionSeparator"></div>
                            <div className='ContentContainer' >
                                <div className={`TextAndImageContainer  ${visibilityState[index].visibility ? "Slide-Right" : "Slide-Left"}`}>
                                    <div className="SectionImageContainer">
                                        <img src={section.image} />
                                    </div>
                                    <p>{section.text}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default LandingPage;