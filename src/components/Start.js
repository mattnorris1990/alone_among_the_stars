import React, {useState} from "react"
import styled from "styled-components"


const Welcome = styled.section`
    margin: 20vh;
    margin-bottom: 5vh;
    display: flex;
    justify-content: center;
    gap: 5vw;
    background-color: #101651;
    border: 8px solid #7eddca;
    border-radius: 20px;
    color: white;
    padding: 3%;
        
`

const Credit = styled.section`
    background-color: #101651;
    border: 8px solid #7eddca;
    border-radius: 20px;
    color: white;
    padding: 1%;
    margin: 40vh;
    margin-bottom: auto;
    margin-top: 0;
`

const Intro = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    font-family: 'Press Start 2P', cursive;
    max-width: 30vw;
    line-height: 170%;
    
`
const EnterNames = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3vh;
`

const JInput = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Nova+Square&display=swap');
    font-family: 'Nova Square', cursive;
    width: 100%;
    background-color: #101651;
    border: 8px solid #7eddca;
    border-radius: 20px;
    color: white;
    padding: 3%;
`
const SubmitButton = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Nova+Square&display=swap');
    font-family: 'Nova Square', cursive;
    color: white;
    
    padding: 3%;
    padding-left: 11%;
    padding-right: 11%;
    border-radius: 30px 0 20px 0;
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

const Start = ({setName, setShipName}) => {
    const [yourName, setYourName] = useState("")
    const [yourShipName, setYourShipName] = useState("")

    const handleNameChange = (event) => {
        setYourName(event.target.value)
    }

    const handleShipNameChange = (event) => {
        setYourShipName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setName(yourName)
        setShipName(yourShipName)

    }

    return (
        <>
            <Welcome>
                <Intro>
                    <p>You are a solitary adventurer, hopping from planet to planet exploring. Each world has unique features for you to discover and record. They are represented by cards from a standard deck, placed face down.</p>
                </Intro>
                <EnterNames onSubmit={handleSubmit}>
                    <label>Your Name:
                        <JInput type="text" name="name" value={yourName.name} onChange={handleNameChange} required/>
                    </label>

                    <label>Your Ship's Name:
                        <JInput type="text" name="name" value={yourShipName.name} onChange={handleShipNameChange} required/>
                    </label>
                    <SubmitButton type="submit" value="submit">Submit</SubmitButton>
                </EnterNames>
            </Welcome>
            <Credit>
                <p>based on Alone Among The Stars, a solo RPG by Takuma Okada - get it <a href="https://noroadhome.itch.io/">here.</a></p>
            </Credit>
        </>
    )
}

export default Start