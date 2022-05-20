import React from "react"
import CardDiceInfo from "../components/CardDiceInfo"
import TurnDetails from "../components/TurnDetails"
import JournalEntryForm from "../components/JournalEntryForm"
import JournalEntries from "../components/JounralEntries"
import styled from "styled-components"

const DetailsAndJournal = styled.div`
    display: flex;
    justify-content: space-around;
`

const JourneyDetails = styled.section`
    text-align: left;
    max-width: 30%;
    min-width: 30%;
`

const GameContainer = ({deck, number, card, fetchCard, rollDice, addJournalEntry}) => {

    return (
        <>
            <DetailsAndJournal>
                <JourneyDetails>   

                    <CardDiceInfo card={card} number = {number} fetchCard = {fetchCard} rollDice = {rollDice} />
                    {card ? <TurnDetails card={card} number = {number}/> : null}

                </JourneyDetails>

                <JourneyDetails>
                    <JournalEntryForm addJournalEntry = {addJournalEntry}/>
                    <JournalEntries/>
                </JourneyDetails>
            </DetailsAndJournal>
        </>
    )
}

export default GameContainer