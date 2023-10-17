import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Moments.scss";

const Moments = ({data}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        const nextSlide = (currentSlide+1)%data.length;
        setCurrentSlide(nextSlide);
    }

    const prevSlide = () => {
        const prevSlide = (currentSlide-1+data.length)%data.length;
        setCurrentSlide(prevSlide);
    };

    
    return (
    <section id="moments">
        <div className="section-container">
            <div className="section-title">
                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                <span> </span>
                Moments
            </div>
            <div className="bg-container">
                <p>I am enthusiastic about photography and videography and enjoy capturing amazing moments.</p>
            </div>
            <div className="carousel-box">
                <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
                <div className="carousel-container">
                {data.map((slide, index) => 
                    <div className={(index==currentSlide)?"carousel-slide":"carousel-slide carousel-slide-hidden"} key={index}>
                        <div className="slide-container">
                            <div className="slide-text"> 
                                {slide.keywords.map((keyword, index) =>
                                    <h1 className="heading-3" key={index}>{keyword}</h1>
                                )}
                            </div>
                            {slide.type === "video" ? 
                                <video controls>
                                    <source src={slide.src} type="video/mp4"/>
                                </video> :
                                <img src={slide.src} alt={slide.alt}/>
                            }
                        </div>
                    </div>
                )}
                </div>
                <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
                <span className="indicators">
                    {data.map((_, index)=> {
                        return <button key={index} className={(index==currentSlide)?"indicator active":"indicator"} onClick={() => setCurrentSlide(index)}></button>
                    })}
                </span>
            </div>
        </div>
    </section>
    );
};

export default Moments;