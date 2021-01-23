import React from 'react'
import {
     AboutDescription, 
     AboutRow, 
     AboutSection, 
     AboutContainer,
     AboutH1,
     AboutP
} from './AboutSectionElements'
import {FaStar} from 'react-icons/fa'

const About = () => {
    return (
        <AboutSection>
            <AboutContainer>
                <AboutRow>
                    <AboutDescription>
                        <FaStar />
                        <AboutH1>
                            NEW UI Trend 2021 Glassmorphism by MENZ. The new and best concept of the new age
                        </AboutH1>
                        <AboutP>
                            NEW UI Trend 2021 Glassmorphism by MENZ. The new and best concept of the new age
                            NEW UI Trend 2021 Glassmorphism by MENZ. The new and best concept of the new age    
                        </AboutP>
                    </AboutDescription>
                </AboutRow>
            </AboutContainer>
        </AboutSection>
    )
}

export default About
