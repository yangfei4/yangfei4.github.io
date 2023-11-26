import React, { useState } from "react";
import "./Projects.scss";

import SkillSet from "../SkillSet";
import ProjectContainer from "../ProjectContainer";

const Projects = ({data}) => {

    const [ currentCategory, setCurrentCategory ] = useState("software");

    return (
        <section id="projects">
            <div className="section-container">
                <div className="section-title">
                    <i className="fa fa-desktop" aria-hidden="true"></i>
                    {` `}Projects
                </div>
                <div className="category-selector">
                    <div className={`category ${currentCategory === "software" ? "active" : ""}`} onClick={() => setCurrentCategory("software")}>Software Development</div>
                    <div className={`category ${currentCategory === "machineLearning" ? "active" : ""}`} onClick={() => setCurrentCategory("machineLearning")}>Machine Learning</div>
                    <div className={`category ${currentCategory === "robotics" ? "active" : ""}`} onClick={() => setCurrentCategory("robotics")}>Robotics Hardware</div>
                </div>
                <ProjectContainer data={data[currentCategory]} />
                <SkillSet />
            </div>
        </section>
    )
};

export default Projects;