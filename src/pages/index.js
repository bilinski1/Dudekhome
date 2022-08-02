import React from "react"
import HeroSection from "../components/HeroSection/HeroSection"
import Layout from "../components/layout-home"
import AboutUs from "../components/Main/AboutUs"
import Carousel from "../components/Carousel/Carousel"
import "../styles/global.scss"
import {Button} from '../components/LayoutElements/Button'
import InfoSection from "../components/Main/InfoSection"
import Partners from "../components/Partners/partners"
import Map from "../components/Map/Map"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Projekt from "./Projekt";



const IndexPage = () => {
    return (
        <Layout>
            <HeroSection/>
            <main>
                <Projekt />
                    <title>DUDEKHOME.PL</title>
                    <AboutUs/>
                    <Carousel/>
                    <div className="wrapper">
                        <AniLink paintDrip color="white" to="/ProjectsPage">
                            <Button>Lista Inwestycji</Button>
                        </AniLink>
                    </div>

                <InfoSection/>
                <Partners/>
            </main>
            <Map/>
        </Layout>
    )
}

export default IndexPage
