import React from "react"
import styled from "styled-components"

const Entry = styled.div`
    white-space: pre-wrap;
`

const Submission = styled.p`
    text-align: right;  
`

const JournalEntries = ({entries, shipName, name}) => {

    const entriesNodes = entries.map((entry, index)=> {
        return (
            <>
                <h3>{entry.title}</h3>
                <hr/>
                <Entry>{entry.entry}</Entry>
                <Submission>submitted by {name}</Submission>
            </>
        )
    })

    return (
        <>
            <h2>{shipName.toUpperCase()}'S LOG</h2>
            {entriesNodes}
        </>
    )
}

export default JournalEntries