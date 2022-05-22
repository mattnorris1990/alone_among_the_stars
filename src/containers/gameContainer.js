import React from "react"
import CardDiceInfo from "../components/CardDiceInfo"
import TurnDetails from "../components/TurnDetails"
import JournalEntryForm from "../components/JournalEntryForm"
import JournalEntries from "../components/JournalEntries"
import styled from "styled-components"
import FirstPlanet from "../components/FirstPlanet"

const DetailsAndJournal = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const JourneyDetails = styled.section`
    text-align: left;
    max-width: 30%;
    min-width: 30%;
`

const Log = styled.section`
    text-align: center;
    width: 50%;
    margin: auto;
    margin-bottom: 5vh;
    
`


const GameContainer = ({number, entries, card, fetchCard, rollDice, addJournalEntry, name, shipName}) => {

    return (
        <>
            <DetailsAndJournal>
                <JourneyDetails>   

                    {card ? <CardDiceInfo card={card} number = {number} fetchCard = {fetchCard} rollDice = {rollDice} /> : <FirstPlanet rollDice = {rollDice} fetchCard = {fetchCard}/>}
                    {card ? <TurnDetails card={card} number = {number}/> : null}

                </JourneyDetails>

                <JourneyDetails>
                    <JournalEntryForm addJournalEntry = {addJournalEntry}/>
                    
                </JourneyDetails>
            </DetailsAndJournal>
            <Log>
                <JournalEntries entries={entries} shipName = {shipName} name = {name}/>
            </Log>
        </>
    )
}

export default GameContainer