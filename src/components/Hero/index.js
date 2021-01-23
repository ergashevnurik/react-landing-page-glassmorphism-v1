import React from 'react'
import { 
    HeroButtonLeft, 
    HeroButtonRight,
    HeroColumnLeft,
    HeroColumnRight, 
    HeroContainer, 
    HeroH1, 
    HeroImage, 
    HeroP, 
    HeroSpan,
    HeroRow, 
    HeroSection 
} from './HeroElements'

const Hero = ({bg, reverse, span, h1, p, buttonLabelLeft, buttonLabelRight, img, alt, buttonLinkLeft, buttonLinkRight}) => {
    return (
        <HeroSection bg={bg}>
            <HeroContainer>
                <HeroRow>
                    <HeroColumnLeft reverse={reverse}>
                        <HeroSpan>{span}</HeroSpan>
                        <HeroH1>{h1}</HeroH1>
                        <HeroP>{p}</HeroP>
                        <HeroButtonLeft to={buttonLinkLeft}>{buttonLabelLeft}</HeroButtonLeft>
                        <HeroButtonRight to={buttonLinkRight}>{buttonLabelRight}</HeroButtonRight>
                    </HeroColumnLeft>
                    <HeroColumnRight reverse={reverse}>
                        <HeroImage src={img} alt={alt}></HeroImage>
                    </HeroColumnRight>
                </HeroRow>
            </HeroContainer>
        </HeroSection>
    )
}

export default Hero
