import React, { memo, useState, useEffect } from 'react';
import './App.scss';

import NavBar from "./components/NavBar";
import About from './components/About';
import Projects from './components/Projects';
import Moments from './components/Moments/Moments';
import Contact from './components/Contact';

import momentsData from "./assets/momentsData.json";
import projectData from "./assets/projectData.json";
import ActiveSectionContext from './context/activeSectionContext';

const App = () => {
    const [activeSection, setActiveSection] = useState("about");
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]");
            let currentActiveSection = "about"; // default

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 80; // 80 is // offset to highlight the navbar item
                const sectionHeight = section.clientHeight;

                if(section.id === "contact") {
                    if (window.scrollY + window.innerHeight >= document.body.offsetHeight ) {
                        currentActiveSection = section.id;
                    }
                }
                else if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentActiveSection = section.id;
                }

                const header = document.querySelector("header");
                if (window.scrollY < 10) {
                    setIsTop(true);
                }
                else {
                    setIsTop(false);
                };
            });

            setActiveSection(currentActiveSection);
        };

        // Navbar Resizing
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <ActiveSectionContext.Provider value={{activeSection, isTop}}>
            <div className='pageContainer'>
                <div className='content'>
                    <NavBar />
                </div>
                <div className="scroll-container">
                    <About />
                    <Projects data={projectData.projects}/>
                    <Moments data={momentsData.slides}/>
                    <Contact />
                </div>
                <footer>
                    <p>&copy; 2023 Yangfei. All rights reserved.</p>
                </footer>
            </div>
        </ActiveSectionContext.Provider>
    );
};

export default memo(App);