import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarSection = styled.nav `
    width: 100%;
    border-bottom: 3px solid rgba( 208, 2, 27, 0.25 );

`

export const NavbarContainer = styled.div `
    width: 1200px;
    margin: auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const NavbarLogo = styled(Link) `
    text-decoration: none;
    font-size: 32px;
    margin-right: auto;

    padding: 12px 20px;
    color: #F50057;
`

export const NavbarUnOrderedList = styled.ul `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    list-style: none;

    @media screen and (max-width: 1200px) {
        display: none;
    }
`

export const NavbarListItem = styled.li `

`

export const NavbarLink = styled(Link) `
    text-decoration: none;
    color: black;

    padding: 12px 20px;
`

export const NavbarSignIn = styled(Link) `
    text-decoration: none;
    color: black;

    padding: 12px 20px;

    margin-left: auto;

    color: #fff;
    background: #F50057;

    border-radius: 25px;
    border: 2px solid #F50057;
    transition: all .2s ease-in-out;

    &:hover {
        background: #fff;
        color: #F50057;
    }

    @media screen and (max-width: 1200px) {
        display: none;
    }
`