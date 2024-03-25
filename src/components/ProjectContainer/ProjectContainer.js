import React from "react";

import "./ProjectContainer.scss";

const ProjectContainer = ({ data }) => {
    return(
    <div className="projects-container">
        {data.map((project, index) =>(
            <div className="project-row" key={index}>
                <div className="project-image">
                    <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                    <div className="project-title">{project.title}</div>
                    <div className="project-techs">{project.techs.map((tech, index) =>(
                        <span className="project-tech" key={index}>{tech}</span>
                    ))}</div>
                    <div className="project-links">
                        {(project.links.live || project.links.demo) && (
                        <a href={project.links.live ? project.links.live : project.links.demo} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-external-link" aria-hidden="true"></i>
                            {project.links.live ? (
                                <span>&nbsp; Live</span>
                            ) : (
                                <span>&nbsp; Demo</span>
                            )}
                        </a>)}
                        
                        {project.links.github && (<a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github" aria-hidden="true"></i>
                            &nbsp; Source Code
                        </a>)}

                    </div>
                </div>
            </div>
        ))}
    </div>
    )
};

export default ProjectContainer;