import React from 'react'
import Slider from "react-slick";
import karuzela1 from "../../images/Carousel/karuzela1.jpg"
import karuzela2 from "../../images/Carousel/karuzela2.jpg"
import karuzela3 from "../../images/Carousel/karuzela3.jpg"
import karuzela4 from "../../images/Carousel/karuzela4.jpg"
import karuzela5 from "../../images/Carousel/karuzela5.jpg"
import karuzela6 from "../../images/Carousel/karuzela6.png"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Carousel.scss"

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
};

const Carousel = (props) => {
    return (
        <div className="carousel-wrapper">
            <Slider {...settings} className="">
                <div><h1><img src={karuzela1} alt="karuzela" /></h1></div>
                <div><h1><img src={karuzela2} alt="karuzela" /></h1></div>
                <div><h1><img src={karuzela3} alt="karuzela" /></h1></div>
                <div><h1><img src={karuzela4} alt="karuzela" /></h1></div>
                <div><h1><img src={karuzela5} alt="karuzela" /></h1></div>
                <div><h1><img src={karuzela6} alt="karuzela" /></h1></div>
            </Slider>    
        </div>
    )
}

export default Carousel
