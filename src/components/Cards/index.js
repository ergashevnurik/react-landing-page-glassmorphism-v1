import React from 'react'
import { CardHeading, CardsBody, CardsColumn, CardsContainer, CardsH3, CardsHead, CardsImage, CardsRow, CardsSection } from './CardElements'
import {CardsData} from '../../Data/CardData'
const Cards = ({heading}) => {
    return (
        <CardsSection>
            <CardsContainer>
                <CardHeading>{heading}</CardHeading>
                <CardsRow>
                    {CardsData.map((card, index) => (
                        <CardsColumn key={index}>
                            <CardsHead>
                                <CardsImage src={card.img} alt={card.alt}></CardsImage>
                            </CardsHead>
                            <CardsBody>
                                <CardsH3>{card.h3}</CardsH3>
                                <br />
                                <CardsH3>{card.h2}</CardsH3>
                            </CardsBody>
                        </CardsColumn>
                    ))}
                </CardsRow>
            </CardsContainer>
        </CardsSection>
    )
}

export default Cards
