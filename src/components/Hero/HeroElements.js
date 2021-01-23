import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const HeroSection = styled.section `
    width: 100%;
    padding: 20px;
    background: ${({bg}) => (bg ? '#fff' : 'rgba( 208, 2, 27, 0.25 )')};

`

export const HeroContainer = styled.div `
    width: 1200px;
    margin: auto;
    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const HeroRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const HeroColumnLeft = styled.div `
    width: 550px;
    order: ${({reverse}) => (reverse ? '1' : '2')};
    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const HeroSpan = styled.p `
    letter-spacing: 5px;
    text-transform: uppercase;
    color: #F50057;
    font-size: 14px;
`

export const HeroH1 = styled.h1 `
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 800;
    margin-bottom: 10px;
`

export const HeroP = styled.p `
    margin-bottom: 20px;
`

export const HeroButtonLeft = styled(Link) `
    text-decoration: none;
    font-size: 16px;
    padding: 12px 20px;
    border: 2px solid #F50057;
    color: #fff;
    background: #F50057;

    border-radius: 25px;

    transition: all .2s ease-in-out;

    box-shadow: 0 8px 32px 0 rgba( 208, 2, 27, 0.25 );

    &:hover {
        background: #fff;
        color: #F50057;
    }
`

export const HeroButtonRight = styled(Link) `
    text-decoration: none;
    font-size: 16px;
    padding: 12px 20px;
    border: 2px solid #F50057;
    margin-left: 10px;
    border-radius: 25px;

    box-shadow: 0 8px 32px 0 rgba( 208, 2, 27, 0.25 );

    color: #F50057;

    transition: all .2s ease-in-out;

    &:hover {
        background: #F50057;
        color: #fff ;
    }
`

export const HeroColumnRight = styled.div `
    width: 550px;
    order: ${({reverse}) => (reverse ? '2' : '1')};
    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const HeroImage = styled.img `
    width: 100%;
    height: 100%;
`