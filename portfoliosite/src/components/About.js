import './About.css';
import React, { useState, useRef, useEffect, useCallback } from 'react';

function LandingPage() {
    
    const [observer, setObserver] = useState(null);
    const Sections = [
    {
        name: "EXPERIENCE", 
        headerimage: "/static/238388.png", 
        image: "/static/experience.png", 
        text: `Founder and full-stack engineer delivering end-to-end solutions; from requirements and architecture through implementation, infrastructure, and launch. 
        Built and shipped GetYourStart, a job-search platform featuring multi-API ingestion, geospatial and synonym-aware search, and an in-product feedback loop, deployed on a self-managed Ubuntu stack (Nginx, Docker, Spring Boot, PostgreSQL). 
        Proficient in Java, TypeScript, and SQL, with a strong track record of product-focused execution.`
    },

    {
        name: "EDUCATION", 
        headerimage: "/static/open-book-icon-symbol-vector-free-vector-silhouette-graphics-ai-open-book-silhouette-png-800_800.png", 
        image: "/static/i.png", 
        text: `I graduated from Rowan University in 2024 with my Bachelor of Science in Computer Science. 
        Classes such as Data Structures and Algorithms, as well as Object-Oriented Programming and Data Abstraction, equipped me with knowledge of essential programming concepts. 
        The Rowan curriculum prepared me for work in the industry and provided me the opportunity to develop a Dynamic Tracing Tools Testing Environment for ASRC Federal, as well as a trade study to display my findings from my own use of the tool. 
        For my Senior Project, I and a team of other students developed a full-stack website to host the Online Philadelphia Pointing Span Test. To conclude, I have undergone and completed formal education in the field of computer science.`
    },

    {
        name: "SKILLS", 
        headerimage: "/static/68984377806c969d9504f0faaaede75f-computer-silhouette.webp", 
        image: "/static/1693764088119.png", 
        text: `I am a full-stack web developer, meaning I am capable of developing both frontend UIs and backend APIs. 
        My expertise is in the MERN stack, with most of my projects completed using this stack — including this very portfolio site. 
        Despite my focus on the MERN stack, I also have experience with other frontend frameworks like Angular and HTMX. 
        On the backend, I’ve worked with Django and Spring Boot. 
        I am well-versed in the HTML5 markup language and experienced in creating modern CSS3 stylesheets. 
        Many of my projects utilize AWS cloud services to host files and databases, 
        through which I’ve learned to leverage cloud technology to power applications. 
        All of the code for my projects, including this site, can be found on my GitHub, which is linked on the Projects page.
        An extensive list of my projects and the technologies I used to build them can also be found there.`
    }
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