import React from "react";
import "./SkillSet.scss";

const SkillSet = () => {
    return (
        <div class="skill-set-box">
            <div class="skill-set">
                <div class="skill-set-instance">
                    <div class="skill-icon">
                        <i class="fa fa-keyboard-o" aria-hidden="true"></i>
                    </div>
                    <div class="skill-text">
                        <h1 class="heading-3">Full-Stack Dev</h1>
                        <ul>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>HTML & CSS</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>MySQL & NoSQL</li>
                        </ul>
                    </div>
                </div>
                <div class="skill-set-instance">
                    <div class="skill-icon">
                        <i class="fa fa-rocket" aria-hidden="true"></i>
                    </div>
                    <div class="skill-text">
                        <h1 class="heading-3">Machine Learning</h1>
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
                <div class="skill-set-instance">
                    <div class="skill-icon">
                        <i class="fa fa-cogs" aria-hidden="true"></i>
                    </div>
                    <div class="skill-text">
                        <h1 class="heading-3">Mechanical Engineering</h1>
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