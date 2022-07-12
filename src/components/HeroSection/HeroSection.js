import React from 'react'
import { Button } from '../LayoutElements/Button'
import { Link } from "gatsby"
import "./HeroSection.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Logo from '../../images/dudeklogooriginal.png'



const HeroSection = () => {
    return (
        <div className="hero-container">
            <h1>Zainwestuj w przyszłość.</h1>
<div className='logo-wrapper'>
    <img className='logo' src={Logo}/>
</div>
        </div>
    )
}

export default HeroSection
