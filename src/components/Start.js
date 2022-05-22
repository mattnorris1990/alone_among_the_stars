import React, {useState} from "react"
import styled from "styled-components"
import Rectangle from "../assets/rectangle.png"
import Ship from "../assets/ship.gif"


const Welcome = styled.section`
    
    margin: 20vh;
    margin-top: 5vh;
    margin-bottom: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
            <div class = "animate-ship">
                <img src= {Ship} class="ship"/>  
            </div>
            <Welcome>
                <Intro>
                    <p>You are a solitary adventurer, hopping from planet to planet exploring. Each world has unique features for you to discover and record.</p>
                </Intro>
                <EnterNames onSubmit={handleSubmit}>
                    <label>Your Name:
                        <JInput type="text" name="name" value={yourName.name} onChange={handleNameChange} required/>
                    </label>

                    <label>Your Ship's Name:
                        <JInput type="text" name="name" value={yourShipName.name} onChange={handleShipNameChange} required/>
                    </label>
                    <input type="submit" value="submit" className="button"/>
                </EnterNames>
            </Welcome>
            <Credit>
                <p>based on Alone Among The Stars, a solo RPG by Takuma Okada - get it <a href="https://noroadhome.itch.io/">here.</a></p>
                <p>Ship sprite by <a href="https://ansimuz.itch.io/">Ansimuz</a></p>
            </Credit>
        </>
    )
}

export default Start