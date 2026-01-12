import './Systems.css';
import React, { useState, useRef, useEffect } from 'react';

function Systems() {
    const sectionRef = useRef(null);
    const caseStudyRef = useRef(null);

    const [visibilityState, setVisibilityState] = useState(false);
    const [caseStudyVisibility, setCaseStudyVisibility] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === sectionRef.current) {
                        setVisibilityState(entry.isIntersecting);
                    }

                    if (entry.target === caseStudyRef.current) {
                        setCaseStudyVisibility(entry.isIntersecting);
                    }
                });
            },
            { threshold: 0.25 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        if (caseStudyRef.current) observer.observe(caseStudyRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
            if (caseStudyRef.current) observer.unobserve(caseStudyRef.current);
            observer.disconnect();
        };
    }, []);

    return (
        <div className="SystemsPage">
            <div className="InitialSection Fade-In">
                <div className="Information">
                    <h1 className="header">SYSTEMS AND INFRASTRUCTURE</h1>
                    <span className="divider"></span>
                    <div className="PageDetails">
                        <h2>SYSTEMS</h2>
                        <p>
                            I design and operate production-grade systems that host real applications and client
                            websites.
                        </p>
                        <h2>DEPLOYMENT</h2>
                        <p>These systems are built for reliability, security, and predictable costs.</p>
                    </div>
                </div>

                <div className="UbuntuLogo">
                    <img src="/static/Ubuntu.png" alt="Ubuntu" />
                </div>
            </div>

            <div className="About">
                <div className="SectionContainer" ref={sectionRef}>
                    <div className="NameAndLogo">
                        <div className="SectionLogoContainer">
                            <img src="/static/Tux.png" alt="Linux" />
                        </div>
                        <h1 className="SectionName">WHAT THESE SYSTEMS POWER</h1>
                    </div>

                    <div className="SectionSeparator"></div>

                    <div className="ContentContainer">
                        <div
                            className={`TextAndImageContainer ${
                                visibilityState ? 'Slide-Right' : 'Slide-Left'
                            }`}
                        >
                            <p>
                                These systems power public-facing business websites, full-stack web applications,
                                and internal services and APIs. They are designed to run in secure, isolated
                                environments with automated backups and continuous monitoring, ensuring reliability
                                and predictable performance over time. By handling hosting, security, and
                                operational upkeep at the system level, these environments allow applications and
                                websites to remain stable, recoverable, and easy to maintain as needs evolve.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='SystemsHeader'>
                <p>CASE STUDY</p>
            </div>

            <div className='CaseStudy'>
                <div className="ProjectContainer" ref={caseStudyRef}>
                    <div className={`Project ${caseStudyVisibility ? 'Slide-Up' : 'Fade-Out'}`}>
                        <p className="ProjectName">ULTRON</p>

                        <div className="ImgAndDesc">
                            <div className="ProjectImageContainer">
                                <img src="/static/dark-ultron-icon.jpg" alt="Ultron" />
                            </div>

                            <p className="ProjectDesc">
                                Ultron is a production hosting and deployment system I operate to run real-world
                                applications and client websites. Built on a hardened Linux environment, it is
                                designed around service isolation, controlled access, and operational reliability
                                rather than experimentation. Ultron provides the foundation for secure deployments,
                                automated backups, and predictable performance, allowing applications and websites to
                                run consistently while remaining easy to maintain, recover, and scale as requirements
                                evolve.
                            </p>
                        </div>

                        <a
                            className="ProjectLink"
                            href="https://nasirgriffin.com/ultron"
                            target="_blank"
                            rel="noreferrer"
                        >
                            CHECK OUT ULTRON
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Systems;
