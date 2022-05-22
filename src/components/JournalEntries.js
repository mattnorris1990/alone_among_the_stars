import React from "react"
import styled from "styled-components"

const Entry = styled.div`
    white-space: pre-wrap;
`

const Submission = styled.p`
    text-align: right;  
`

const Heading = styled.div`
    margin-top: 5vh;
`

const EntryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5%;
    width: 100%;
    background-color: #101651;
    border: 8px solid #7eddca;
    border-radius: 20px;
    color: white;
    padding: 3%;
    margin-top: 3vh;
    margin-bottom: 3vh;

`

const EntryHeading = styled.h3`
    text-align: left;
`

const JournalEntries = ({entries, shipName, name}) => {

    const entriesNodes = entries.map((entry, index)=> {
        return (
            <>
                <EntryContainer>
                    <EntryHeading>{entry.title}</EntryHeading>
                        <Entry>{entry.entry}</Entry>
                        <Submission>submitted by {name}</Submission>
                </EntryContainer>
            </>
        )
    })

    const handleClick = () => {
        let array = downloadJournal()

        let a = window.document.createElement('a');
        a.href = window.URL.createObjectURL(new Blob (array, {type: 'text'}))
        a.download = 'log.txt';

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);

    }

    const downloadJournal = () => {
        let combined = []
        
        entries.map((entry) => {
            let newEntry = `title: ${entry.title} \n \n entry: ${entry.entry} \n \n`
            combined.push(newEntry)
        })

        return combined

    }

    return (
        <>
            <Heading>
                <h2>{shipName.toUpperCase()}'S LOG</h2>
                <button onClick={handleClick} className = "button">Download</button>
            {entriesNodes}
            </Heading>
        </>
    )
}

export default JournalEntries