import React from "react";

import "./Contact.scss";

const Contact = () => {
    return(
        <section id="contact">
            <div className="section-container">
                <div className="section-title">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    <span> </span>
                    Contact
                </div>
                <div className="box">
                    <h2><a href="mailto:yangfei4@illinois.edu">Send me an email 💌</a></h2>
                </div>
                <div className="contact-container">
                    <div className="social-media">
                        <div className="social-media-instance">
                            <a href="https://github.com/yangfei4/"><i className="fa fa-github" aria-hidden="true"></i></a>
                        </div>
                        <div className="social-media-instance">
                            <a href="https://www.linkedin.com/in/yangfei4/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        </div>
                        <div className="social-media-instance">
                            <a href="tel:217-721-1234"><i className="fa fa-phone" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div className="contact-text">
                        <h1>Always keen for a good prop so feel free to say hey!</h1>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;