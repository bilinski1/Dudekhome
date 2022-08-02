import React from 'react'
import './layout.scss'
import Navbar from "./Navbar/Navbar-home"
import Footer from "./Footer/Footer"
import PropTypes from "prop-types"
import { SEO } from "./seo"


const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
export const Head = () => (
    <SEO />
)