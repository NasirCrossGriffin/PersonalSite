import './Projects.css';
import './Client.css';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';

function Client() {

    const Services = [
        {
            name: "Mobile-Friendly",
            description: "All websites are designed to be highly mobile responsive.",
            image: "/static/mobile.png"
        },
        {
            name: "Direct Communication",
            description: "You have direct access when you need help.",
            image: "/static/handshake.png"
        },
        {
            name: "We Handle Everything",
            description: "Everything is managed so you don’t have to worry.",
            image: "/static/handled.png"
        },
        {
            name: "Reliable & Always Online",
            description: "Your website is hosted reliably to stay online and accessible.",
            image: "/static/reliable.png"
        },
        {
            name: "Ongoing Maintenance",
            description: "All changes are handled to keep your site running smoothly.",
            image: "/static/maintenance.png"
        },
        {
            name: "Built to Grow",
            description: "Your website is built to scale as your needs change.",
            image: "/static/grow.png"
        }
    ];

    const testimonials = [ 
        {
            client : "JDMultiprocessAndServices", 
            image : "/static/Juliana.png", 
            testimony : `"Griffin is the best he did my web page and I like so much is it great."`, 
            Stars : 5
        }, {
            client : "Trinity Silva", 
            image : "/static/Trinity.png", 
            testimony : `"Griffin is an excellent company to work with. they are very professional, 
            creative and have a driven personality to take care of business right away. 
            I recommend them 100% and you won’t regret it!"`, 
            Stars : 5
        },  
    ]

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
    const servicesSectionRef = useRef(null);
    const serviceRefs = useRef([]); // array of refs for each ServiceContainer
    const testimonialsSectionRef = useRef(null);
    const testimonialRefs = useRef([]); // array of refs for each TestimonyContainer
    const businessTitleRef = useRef(null);
    const scrollDownRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const el = businessTitleRef.current;
        const scrollEl = scrollDownRef.current;
        if (!el || !scrollEl) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Reveal sequence (keep your existing behavior)
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    el.classList.add("RevealActive");

                    // If title is visible, ensure scroll-down is visible
                    scrollEl.classList.remove("Fade-Out");
                } else {
                    // When businessTitle is no longer being observed, fade out scroll text
                    scrollEl.classList.add("Fade-Out");
                }
            }, { threshold: 0.75 }
    );

    observer.observe(el);
    return () => observer.disconnect();
    }, []);


    

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
        const el = testimonialsSectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
            const entry = entries[0];
            if (!entry) return;

            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                testimonialRefs.current.forEach((container, i) => {
                if (!container) return;

                // The element we animate inside TestimonyContainer
                const testimonyEl = container.querySelector(".Testimony");
                if (!testimonyEl) return;

                testimonyEl.classList.add("SlideUpAndAppear");
                testimonyEl.style.animationDelay = `${i * 0.5}s`; // same stagger as Services
                });

                observer.unobserve(el); // fire once
            }
            },
            { threshold: 0.5 }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    
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

    useEffect(() => {
        const el = servicesSectionRef.current;
        if (!el) return;

        let timeoutId = null;

        const observer = new IntersectionObserver(
            (entries) => {
            const entry = entries[0];
            if (!entry) return;

            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                serviceRefs.current.forEach((container, i) => {
                    if (!container) return;

                    // The element with the class "Service Invisible" lives inside ServiceContainer
                    const serviceEl = container.querySelector(".Service");
                    if (!serviceEl) return;

                    serviceEl.classList.add("SlideUpAndAppear");

                    // optional: stagger each element slightly
                    serviceEl.style.animationDelay = `${i * 0.5}s`;
                });

                // If you only want it to fire once:
                observer.unobserve(el);
            }
            },
            { threshold: 0.5 }
        );

        observer.observe(el);

        return () => {
            if (timeoutId) window.clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, []);
    return (
        <div className="Projects">
            <p className='Scroll-Down' data-text="SCROLL DOWN" ref={scrollDownRef}>SCROLL DOWN</p>
            <div className="BusinessTitle" ref={businessTitleRef}>
                <h1 className="BusinessHeader Reveal">Griffin Managed Web Solutions</h1>

                <div className="BusinessLogo Reveal">
                    <img src="/static/GriffinMWS.png" />
                </div>

                <p className="Slogan Reveal">
                    We handle the tech so that you don't have to.
                </p>
            </div>

            <div className="InitialSection Fade-In" >
                <div class="Information">
                    <h1 className="header">CLIENT SERVICES</h1>
                    <div className="divider"></div>
                    <div className="PageDetails">
                        <h2>MANAGED WEB SOLUTIONS PROVIDER</h2>
                        <p>
                            We build and manage production-ready websites for small businesses and personal brands. 
                            Each site is fully handled end-to-end, including development, hosting, and ongoing maintenance. 
                            Clients get a reliable online presence without having to manage any technical details.
                        </p>
                    </div>
                </div>                    
                
                <div class="Handshake">
                        <img src="/static/handshake.png" />
                </div>
            </div>

            <h1 className='SectionHeader'>WHY YOU CHOOSE US</h1>

            <div className="Services" ref={servicesSectionRef}>
                {Services.map((service, index) => (
                    <div
                    key={index}
                    className="ServiceContainer"
                    ref={(node) => (serviceRefs.current[index] = node)}
                    >
                    <div className="Service" id={`service-${index}`}>
                        <p className="ServiceName">{service.name}</p>
                        <div className="ServiceImageContainer">
                            <img src={service.image} alt="no image" />
                        </div>
                        <p className="ServiceDesc">{service.description}</p>
                    </div>
                    </div>
                ))}
            </div>

            <h1 className='SectionHeader'>Testimonials</h1>

            <div className='Testimonials' ref={testimonialsSectionRef}>
                {testimonials.map((testimony, index) => (
                    <div
                    key={index}
                    className='TestimonyContainer'
                    ref={(node) => (testimonialRefs.current[index] = node)}
                    >
                    <div className='Testimony'>
                        <div className='Client'>
                        <div className='ClientImage'>
                            <img src={testimony.image} alt={testimony.client} />
                        </div>
                        <h2>{testimony.client}</h2>
                        </div>

                        <p className='ClientTestimony'>{testimony.testimony}</p>

                        <div className='StarRating'>
                        {Array.from({ length: testimony.Stars }).map((_, starIndex) => (
                            <div key={starIndex} className="Star">
                            <img src="/static/star.png" alt="star" />
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                ))}
            </div>

            <h1 className='SectionHeader'>Our Clients</h1>

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

            <h1 className='SectionHeader'>Let Us Handle This For You</h1>

            <div className='Contact'>
                <div className='ContactContainer'>
                    <div className='ContactMethod'>
                        <h2 className='MethodHeader'>Email Us</h2>
                        <button className='MethodButton' onClick={() => {navigate(`/contact`, { replace: true })}}>
                            <img className='MethodImage' src='/static/email.png'/>
                        </button>
                    </div>

                    <div className='ContactMethod'>
                        <h2 className='MethodHeader'>Call Us</h2>
                        <a className='MethodButton' href="tel:+16098059113">
                            <img className='MethodImage' src='/static/call.png'/>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Client;