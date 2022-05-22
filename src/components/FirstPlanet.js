import React from "react"
import styled from "styled-components"

const FirstButton = styled.div`
    text-align: center;
    
`

const FirstPlanet = ({fetchCard, rollDice}) => {

    const handleClick = () => {
        fetchCard()
        rollDice()
    }

    return (
        <>  
            <FirstButton>
                <button onClick={handleClick} className = "big-button" >New Planet</button>
            </FirstButton>
        </>

    )
}

export default FirstPlanet