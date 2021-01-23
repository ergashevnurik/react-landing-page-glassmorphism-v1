import styled from 'styled-components'


export const CardsSection = styled.section `
    width: 100%;
    padding: 20px;
`

export const CardsContainer = styled.div `
    width: 1200px;
    margin: auto;
    @media screen and (max-width: 1200px) {
        width: 100%;
    }

`

export const CardsRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const CardsColumn = styled.div `
    margin: 15px;
    width: 300px;
    height: 400px;

    background: rgba( 208, 2, 27, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 0.0px );
    -webkit-backdrop-filter: blur( 0.0px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    @media screen and (max-width: 1200px) {
        width: 100%;
        height: 100%;
    }
`

export const CardsHead = styled.div `
    width: 200px;
    display: flex;
    margin: auto;
    padding: 20px;
`

export const CardsImage = styled.img `
    width: 100%;
    height: 100%;
`

export const CardsBody = styled.div `
    padding: 20px;
`

export const CardsH3 = styled.h3 `

`

export const CardHeading = styled.h1 `
    text-align: center;
    font-size: 40px;
    font-weight: 800;
`