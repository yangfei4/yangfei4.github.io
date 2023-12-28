import React from "react";
import "./SkillSet.scss";

const SkillSet = () => {
    return (
        <div className="skill-set-box">
            <h1 className="skill-set-titile">Skills</h1> 
            <div className="skill-set">
                <div className="skill-set-instance">
                    <div className="skill-icon">
                        <i className="fa fa-keyboard-o" aria-hidden="true"></i>
                    </div>
                    <div className="skill-text">
                        <h1 className="heading-3">Full-Stack Dev</h1>
                        <ul>
                            <li>Java 8</li>
                            <li>Spring Boot</li>
                            <li>Maven</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>HTML & CSS</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>MySQL & NoSQL</li>
                        </ul>
                    </div>
                </div>
                <div className="skill-set-instance">
                    <div className="skill-icon">
                        <i className="fa fa-rocket" aria-hidden="true"></i>
                    </div>
                    <div className="skill-text">
                        <h1 className="heading-3">Machine Learning</h1>
                        <ul>
                            <li>Python</li>
                            <li>PyTorch</li>
                            <li>Docker</li>
                            <li>OpenCV</li>
                            <li>Matplotlib</li>
                            <li>Scikit-learn</li>
                            <li>TensorFlow</li>
                        </ul>
                    </div>
                </div>
                <div className="skill-set-instance">
                    <div className="skill-icon">
                        <i className="fa fa-cogs" aria-hidden="true"></i>
                    </div>
                    <div className="skill-text">
                        <h1 className="heading-3">Mechanical Engineering</h1>
                        <ul>
                            <li>ROS</li>
                            <li>MATLAB</li>
                            <li>AutoCAD</li>
                            <li>ANSYS</li>
                            <li>Python</li>
                            <li>Blender</li>
                            <li>SolidWorks</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillSet;