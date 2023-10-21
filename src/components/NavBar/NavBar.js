import React, { useContext } from "react";

import './NavBar.scss';
import ActiveSectionContext from "../../context/activeSectionContext";

const NavBar = () => {
    const { activeSection, isTop } = useContext(ActiveSectionContext);
    return (
        <header className={isTop?"active":""}>
            <div className="header-title">
                <h2>YANGFEI PORTFOLIO</h2>
            </div>
            <nav>
                <a href="#about" className={`navbar-item ${activeSection === 'about' ? 'active' : ''}`}>About</a>
                <a href="#projects" className={`navbar-item ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
                <a href="#moments" className={`navbar-item ${activeSection === 'moments' ? 'active' : ''}`}>Moments</a>
                <a href="#contact" className={`navbar-item ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
            </nav>
        </header>
    );
};

export default NavBar;