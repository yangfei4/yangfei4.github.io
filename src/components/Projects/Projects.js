import React from "react";
import "./Projects.scss";

import SkillSet from "../SkillSet";

const Projects = () => {
    return (
        <section id="projects">
            <div className="section-container">
                <div className="section-title">
                    <i className="fa fa-desktop" aria-hidden="true"></i>
                    {` `}Projects
                </div>
                <SkillSet />
                <div className="projects-grid">

                </div>

            </div>
        </section>
    )
};

export default Projects;