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
import {Helmet} from "react-helmet";



const IndexPage = () => {

    return (
        <Layout>
            <Helmet>
                <title>Dudekhome - Nieruchomości i Działki w Brzesku i Małopolsce</title>
                <link rel="canonical" href="http://dudekhome.com"/>
                <meta name="description" content="Nieruchomości oraz działki w urokliwych okolicach małopolski, nowoczesne stajnie, domy szkieletowe" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="robots" content="index, follow" />
            </Helmet>
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
