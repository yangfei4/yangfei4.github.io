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
                        I am a Master's MechSE student at the University of Illinois Urbana-Champaign. 
                        Alongside my in-depth studies and hands-on experience in Web Development and Machine Learning, 
                        I've cultivated a keen interest in full-stack development.
                    </p>
                    {/* <span className="highlight-bg">I'm actively seeking a full-time position for Summer 2024.</span> */}
                </div>
                <div className="about-image">
                    <img src="assets/self-intro.jpg" className="about-img" alt="selfish"/>
                </div>
            </div>
        </section>
    );
};

export default About;