import React from 'react'
import { Button } from '../LayoutElements/Button'
import { Link } from "gatsby"
import "./HeroSection.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink";



const HeroSection = () => {
    return (
        <div className="hero-container">
            <h1>ZAINWESTUJ W PRZYSZŁOŚĆ</h1>
            <AniLink paintDrip color="white" to="/Projekt">
                <Button>Lista Inwestycji</Button>
            </AniLink>
        </div>
    )
}

export default HeroSection
