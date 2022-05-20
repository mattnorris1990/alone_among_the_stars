import React from "react"
import CardInfo from "./CardInfo"
import DiceInfo from "./DiceInfo"
import styled from "styled-components"

const Results = styled.div `
    display: flex;
    gap: 3vh;
`
const NewPlanet = styled.button `
    margin-bottom: 10%;
    padding: 3%;
    padding-left: 11%;
    padding-right: 11%;
    border-radius: 30px 0 0 0;
    border: 10px #7eddca;
    border-style: solid none none solid;
    background-color: transparent;
    transition-duration: 1s;
    &:hover {
        border: 10px #e39063;
        border-style: solid none none solid;
        transition-duration: 0.4s;
    }
    &:active {
        border: 10px #e39063;
        border-style: solid none none solid;
        background-color: #e39063
    }

`

const CardDiceInfo = ({card, number, fetchCard, rollDice}) => {

    const handleClick = () => {
        fetchCard()
        rollDice()
    }

    return (
        <>
            <NewPlanet onClick={handleClick}>Visit New Planet</NewPlanet>
            <Results>
                {card ? <CardInfo card = {card}/> : null}
                {number ? <DiceInfo number = {number}/> : null}
            </Results>
        </>
    )
}

export default CardDiceInfo