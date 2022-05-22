import React from "react"
import styled from "styled-components"

const Entry = styled.div`
    white-space: pre-wrap;
`

const JournalEntries = ({entries}) => {

    const entriesNodes = entries.map((entry, index)=> {
        return (
            <>
                <h3>{entry.title}</h3>
                <hr/>
                <Entry>{entry.entry}</Entry>
            </>
        )
    })

    return (
        <>
            <h2>SHIP'S LOG</h2>
            {entriesNodes}
        </>
    )
}

export default JournalEntries