import styled from 'styled-components'
import Image from '../../Images/bg.png'


export const AboutSection = styled.section `
    width: 100%;

    // background: url('${Image}');
    // background-size: cover;
    // object-fit: cover;
    // background-position: center;
    padding: 20px;
`

export const AboutContainer = styled.div `
    width: 1200px;
    margin: auto;
    @media screen and (max-width: 1200px) {
        width: 100%;
    }

`

export const AboutRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const AboutDescription = styled.div `
    font-size: 40px;
`

export const AboutH1 = styled.h1 `
    font-size: 24px;
`

export const AboutP = styled.p `
    font-size: 14px;
`