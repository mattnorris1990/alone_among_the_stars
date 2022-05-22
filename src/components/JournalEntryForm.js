import React, {useState} from "react"
import styled from "styled-components"

const JournalForm = styled.form`
    display: flex;
    flex-direction: column;
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
                    <input type="submit" value="submit" className = "button"/>
                </p>
            </JournalForm>
        </>
    )
}

export default JournalEntryForm 