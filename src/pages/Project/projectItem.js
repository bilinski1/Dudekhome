import React from "react"
import { Button } from '../../components/LayoutElements/Button2'
import "./projectitem.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ProjectItem = (props) => {
    return (
        <div className="item-container">
            <div className="box description">
                <div>Projekt {props.no}</div>
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
            <div className="box description"><h4>{props.heading}</h4>{props.description}</div>
        </div>

    )
}
export default ProjectItem