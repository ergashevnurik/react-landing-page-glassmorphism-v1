import React from 'react'
import { NavbarData } from '../../Data/NavbarData'
import { NavbarContainer, NavbarLink, NavbarListItem, NavbarLogo, NavbarSection, NavbarUnOrderedList, NavbarSignIn } from './NavbarElements'

const Navbar = () => {
    return (
        <NavbarSection>
            <NavbarContainer>
                <NavbarLogo to="/">MENZ</NavbarLogo>
                <NavbarUnOrderedList>
                    {NavbarData.map((navbar,index) => (
                        <NavbarListItem key={index}>
                            <NavbarLink to={navbar.link}>{navbar.title}</NavbarLink>
                        </NavbarListItem>
                    ))}
                </NavbarUnOrderedList>
                <NavbarSignIn to="/signin">Sign in</NavbarSignIn>
            </NavbarContainer>
        </NavbarSection>
    )
}

export default Navbar
