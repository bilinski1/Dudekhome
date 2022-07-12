import React, { useState } from "react"
import { Button } from '../../components/LayoutElements/Button2'
import "./projectitem.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import useCollapse from "react-collapsed";
import { FiArrowDownCircle } from "@react-icons/all-files/fi/FiArrowDownCircle";
import { FiArrowUpCircle } from "@react-icons/all-files/fi/FiArrowUpCircle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const ProjectItem = (props) => {
    const [open , setOpen ] = useState(true);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [ isExpanded, setExpanded ] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    function handleOnClick() {
        setExpanded(!isExpanded);
    }
    return (
        <>
            <div className="item-container">
            <div className="box description">
                <div><h4>{<>{props.title}<br /><br /></>}</h4></div>
                <div>Realizacja nr {props.no}</div>
                <div>Działka nr: {props.fieldno}</div>
                <div>Powierzchnia domu m2: {props.housearea}</div>
                <div>Powierzchnia garażu m2: {props.garagearea}</div>
                <div>Powierzchnia działki: {props.fieldarea}</div>
                <div className="Button">
                    <AniLink paintDrip color="white" to={props.url}>
                        <Button>Więcej Informacji</Button>
                    </AniLink>
                </div>
            </div>

            <div className="box"><img src={props.image} alt="Logo" /></div>
                <div className="box description"><h4>{props.heading}</h4>{props.description}      </div>      <div className="icon" {...getToggleProps({onClick: handleOnClick})}>
                {isExpanded ? <div><FiArrowUpCircle size={50}/></div> : <div><FiArrowDownCircle size={50}/></div>}
            </div></div>

            <div className="collapsible">
                <div {...getCollapseProps()}>
                    <div className="content">
                        <Slider {...settings}>
                            <div>
                                <img className="responsive" src={props.imageurl3}/>
                            </div>
                            <div>
                                <img className="responsive" src={props.imageurl4}/>
                            </div>
                            <div>
                                <img className="responsive" src={props.imageurl5}/>
                            </div>
                            <div>
                                <img className="responsive" src={props.imageurl6}/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>


    </>

    )
}
export default ProjectItem