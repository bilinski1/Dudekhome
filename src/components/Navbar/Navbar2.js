import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, Logo, Logo2} from './NavbarStyles'
import logo from '../../images/x.jpg'
import AniLink from "gatsby-plugin-transition-link/AniLink"


const Navbar2 = () => {
const [click, setClick] = useState(false)
const [scroll, setScroll] = useState(false)

const handleClick = () => setClick(!click)

const changeNav = () => {
    if (window.scrollY >= 80) {
        setScroll(true)
    } else {
        setScroll(false)
    }
    
}

useEffect(() => {
    changeNav()
    window.addEventListener('scroll', changeNav)
}
, [])

    return (
        <>
            <IconContext.Provider value={{ color: "#fff"}}>
                <Nav active={scroll} click={click}>
                    <NavbarContainer>
                        <AniLink paintDrip color="white" to="/">
                        <NavLogo>
                            <Logo2 src={logo} alt="Logo"/>
                        </NavLogo>
                        </AniLink>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes color="black" /> : <FaBars/>}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">HOME</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/Onas">O NAS</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/ProjectsPage">REALIZACJE</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/ContactUs">KONTAKT</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar2
