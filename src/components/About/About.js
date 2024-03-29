import React from "react";
import './About.scss';

const About = () => {
    return (
        <section id="about">
            <div className="about-container">
                <div className="about-text">
                    <h1 className="heading-4">Hey! 👋</h1>
                    <h1 className="heading-3">I'm Yangfei Dai</h1>
                    <p className="about-paragraph">
                        I am a Master's MechSE student at University of Illinos Urbana-Champaign, 
                        specializing in software development(full-stack) within a diverse background encompassing machine learning and robotics.
                        I'm actively seeking <b>Software Development Engineer</b> (SDE) internship for Summer 2024.
                    </p>
                </div>
                <div className="about-image">
                    <img src="https://res.cloudinary.com/dhczvji7g/image/upload/v1702065269/portfolio/stqr7b8xfmxamvx8rdkk.jpg" className="about-img" alt="selfish"/>
                </div>
            </div>
        </section>
    );
};

export default About;