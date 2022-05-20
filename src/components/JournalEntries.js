import React from "react"

const JournalEntries = ({entries}) => {

    const entriesNodes = entries.map((entry, index)=> {
        return (
            <>
                <h3>{entry.title}</h3>
                <hr/>
                <p>{entry.entry}</p>
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