import React from "react";
import "./Projects.scss";

import SkillSet from "../SkillSet";

const Projects = ({data}) => {
    console.log(data);
    return (
        <section id="projects">
            <div className="section-container">
                <div className="section-title">
                    <i className="fa fa-desktop" aria-hidden="true"></i>
                    {` `}Projects
                </div>
                <div className="projects-container">
                    {data.map((project, index) =>(
                        <div className="project-row">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <div className="project-title">{project.title}</div>
                                <div className="project-techs">{project.techs.map((tech, index) =>(
                                    <span className="project-tech" key={index}>{tech}</span>
                                ))}</div>
                                <div className="project-links">
                                    <a href={project.links.live ? project.links.live : project.links.demo} target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-external-link" aria-hidden="true"></i>
                                        {project.links.live ? (
                                            <span>&nbsp; Live</span>
                                        ) : (
                                            <span>&nbsp; Demo</span>
                                        )}
                                    </a>
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-github" aria-hidden="true"></i>
                                        &nbsp; Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <SkillSet />
            </div>
        </section>
    )
};

export default Projects;