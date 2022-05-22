import React, {useState} from "react"
import styled from "styled-components"

const JournalForm = styled.form`
    display: flex;
    flex-direction: column;
`
const SubmitButton = styled.button `
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

const JText = styled.textarea`
    @import url('https://fonts.googleapis.com/css2?family=Nova+Square&display=swap');
    font-family: 'Nova Square', cursive;
    width: 100%;
    background-color: #101651;
    border: 8px solid #7eddca;
    border-radius: 20px;
    color: white;
    padding: 3%;
    height: 150px;
    padding-top: 0;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    `

const JournalEntryForm = ({addJournalEntry}) => {
    const [title, setTitle] = useState("")
    const [entry, setEntry] = useState("")

    const handleTitleChange = (event) => {
        setTitle(event.target.value)

    }

    const handleEntryChange = (event) => {
        setEntry(event.target.value)

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addJournalEntry({"title": title, "entry": entry})
        setTitle("")
        setEntry("")
        event.target.reset()
    }


    return (
        <>
            <h3>Add Log Entry</h3>
            <JournalForm onSubmit={handleSubmit} id="journal-entry-form">
                <p>
                <label>Entry title:
                    <JInput type="text" name="title" value={title.title} onChange={handleTitleChange} required/>
                </label>
                </p>
                <p>
                <label>Entry:
                    <JText type="textarea" name="entry" value={entry.textarea} onChange={handleEntryChange} required></JText>
                </label>
                </p>
                <p>
                    <SubmitButton type="submit" value="submit">Submit</SubmitButton>
                </p>
            </JournalForm>
        </>
    )
}

export default JournalEntryForm 