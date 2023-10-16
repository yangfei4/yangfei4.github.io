import React from "react";
import './About.scss';

const About = () => {
    return (
        <section id="about">
            <div class="about-container">
                <div class="about-text">
                    <h1 class="heading-4">Hey! 👋</h1>
                    <h1 class="heading-3">I'm Yangfei Dai</h1>
                    <p class="about-paragraph">
                        I am a Master's MechSE student at the University of Illinois Urbana-Champaign. 
                        Alongside my in-depth studies and hands-on experience in Web Development and Machine Learning, 
                        I've cultivated a keen interest in full-stack development.
                    </p>
                    {/* <span class="highlight-bg">I'm actively seeking a full-time position for Summer 2024.</span> */}
                </div>
                <div class="about-image">
                    <img src="assets/self-intro.jpg" class="about-img"/>
                </div>
            </div>
        </section>
    );
};

export default About;