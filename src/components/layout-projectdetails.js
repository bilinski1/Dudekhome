import React from 'react'
import './layout.scss'
import Navbar2 from "./Navbar/Navbar2"
import Footer from "./Footer/Footer"
import PropTypes from "prop-types"


const Layout = ({children}) => {
    return (
        <>
            <Navbar2/>
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
    <Seo />
)
