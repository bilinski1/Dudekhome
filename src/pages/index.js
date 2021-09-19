import * as React from "react"
import HeroSection from "../components/HeroSection/HeroSection"
import Layout from "../components/layout"
import AboutUs from "../components/Main/AboutUs"
import Carousel from "../components/Carousel/Carousel"
import "../styles/global.scss"
import { Button } from '../components/HeroSection/Button'
import InfoSection from "../components/Main/InfoSection"
import Map from "../components/Map/Map"


const IndexPage = () => {
  return (
    <Layout>
    <HeroSection />
    <main>
    <title>Home Page</title>
    <AboutUs />
    <Carousel />
    <div className="wrapper">
    <Button white primary>Lista Inwestycji</Button>
    </div>
    <InfoSection/>
    </main>
    <Map />
    </Layout>
  )
}

export default IndexPage
