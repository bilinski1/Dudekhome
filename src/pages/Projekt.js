import React from "react";
import Layout from "../components/layout"
import "../styles/Projekt.scss"
import projecticon1 from "../images/project1-icon.jpg"
import projecticon2 from "../images/project2icon.jpg"
import projecticon3 from "../images/project3icon.jpeg"
import ProjectItem from "./Project/projectItem"
import {Link} from "gatsby";
import {Button} from "../components/LayoutElements/Button2";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Projekt = () => {
    return (

        <Layout>
        <div className="projekty-container">
            <h1>PROJEKTY I REALIZACJE</h1>
        </div>
            <ProjectItem no={1} url={"/Projectdetails1"} heading={"Dom jednorodzinny z poddaszem użytkowym"} description={"5 pokoi, 1 kuchnia, 3 łazienki, spiżarka, kotłownia, garderoby, kominek, garaż"} fieldarea={"34"} housearea={"128,04"} fieldno={"3285/6"} garagearea={"22,47"} image={projecticon1}/>
            <ProjectItem no={2} url={"/Projectdetails2"} heading={"Dom jednorodzinny z poddaszem użytkowym"} description={"4 pokoje, 1 kuchnia, 2 łazienki, kotłownia, garderoby, kominek, garaż"} fieldarea={"34"} housearea={"110,57"} fieldno={"3285/6"} garagearea={"18,93"} image={projecticon2}/>
            <div className="item-container">
                <div className="box description">
                    <AniLink paintDrip color="white" to="/Projekt">
                    <div className="Button">
                        <Button>Więcej Informacji</Button>
                    </div>
                    </AniLink>
                </div>
                <div className="box"><img src={projecticon3} alt="Logo" /></div>
                <div className="box description"><h4>Działki budowlane</h4>Szukasz działki pod budowę domu? Koniecznie sprawdź, co mamy do zaoferowania!</div>
            </div>
        </Layout>
    )
}

export default Projekt;

