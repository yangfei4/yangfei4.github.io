import React from "react";
import "./Projects.scss";

import SkillSet from "../SkillSet";

const Projects = () => {
    return (
        <section id="projects">
            <div class="section-container">
                <div class="section-title">
                    <i class="fa fa-desktop" aria-hidden="true"></i>
                    {` `}Projects
                </div>
                <SkillSet />
                <div class="projects-grid">

                </div>

            </div>
        </section>
    )
};

export default Projects;