import React from "react"
import CardInfo from "./CardInfo"
import DiceInfo from "./DiceInfo"
import styled from "styled-components"

const Results = styled.div `
    display: flex;
    gap: 3vh;
`
const PlanetRes = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 3vh;
    margin-bottom: 5%;
    margin-top: 5%;

`

const CardDiceInfo = ({card, number, fetchCard, rollDice}) => {

    const handleClick = () => {
        fetchCard()
        rollDice()
    }

    return (
        <>
            <PlanetRes>
                <button onClick={handleClick} className = "button">Visit New Planet</button>
                <Results>
                    {card ? <CardInfo card = {card}/> : null}
                    {number ? <DiceInfo number = {number}/> : null}
                </Results>
            </PlanetRes>
        </>
    )
}

export default CardDiceInfo