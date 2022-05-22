import React from "react"
import styled from "styled-components"

const Info = styled.section`
    display: flex;
    flex-direction: column;
    gap: 5%;
    width: 100%;
    background-color: #101651;
    border: 8px solid #7eddca;
    border-radius: 20px;
    color: white;
    padding: 3%;

`

const TurnDetails = ({number, card}) => {
    
    const journey = () => {
        if (number === 1 || number === 2) {
            return "it was arduous to get to"
        }
        else if
            (number === 3 || number === 4) {
                return "you came upon it suddenly"
        }
        else if 
            (number === 5 || number === 6) {
                return "you spotted it as you were resting"
        }
    }

    const suitReturn = () => {
        if (card.cards[0].suit === "DIAMONDS") {
            return "Living beings: People like or unlike you, fish, dinosaurs, wolves, birds, giant insects, etc."
        } else if (card.cards[0].suit === "CLUBS") {
            return "Plants and other immobile forms of life: Towering trees, carnivorous pitchers, giant ferns, glowing weeds, floating flowers, oozing mushrooms, etc."
        } else if (card.cards[0].suit === "HEARTS") {
            return "Ruins: Mysterious obelisks, vine-covered temples, abandoned dwellings for people bigger than you, a wrecked spaceship, etc."
        } else if (card.cards[0].suit === "SPADES") {
            return "Natural phenomena: Huge crystal formations, mirages, vividly colored lightning, strange clouds, rocks eroded in strange shapes, veins of precious metals, etc."
        }
    }

    const cardValueReturn = () => {
        if (card.cards[0].value === "ACE") {
            return "In a field taller than you"
        }
        else if (card.cards[0].value === "2") {
            return "Under the light of the moon(s)"
        }
        else if (card.cards[0].value === "3") {
            return "By a gentle river"
        }
        else if (card.cards[0].value === "4") {
            return "In a steep canyon"
        }
        else if (card.cards[0].value === "5") {
            return "In a treetop"
        }
        else if (card.cards[0].value === "6") {
            return "On the snowy peak of a mountain"
        }
        else if (card.cards[0].value === "7") {
            return "Near a volcano"
        }
        else if (card.cards[0].value === "8") {
            return "On a glacier"
        }
        else if (card.cards[0].value === "9") {
            return "Deep underground"
        }
        else if (card.cards[0].value === "10") {
            return "On a cliff face"
        }
        else if (card.cards[0].value === "JACK") {
            return "In the desert"
        }
        else if (card.cards[0].value === "QUEEN") {
            return "In deep water"
        }
        else if (card.cards[0].value === "KING") {
            return "Floating in the air"
        }
    }   
        



    return (
        <>
            <Info>

                    <h3>What did you encounter?</h3> <p>{suitReturn()}</p>

                    <h3>How did you find it?</h3><p>{journey()}</p>

                    <h3>Where did this happen?</h3><p>{cardValueReturn()}</p>

            </Info>
        </>
    )
}


export default TurnDetails