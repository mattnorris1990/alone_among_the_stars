import React, {useState} from "react"

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
            <form onSubmit={handleSubmit} id="journal-entry-form">
                <label>Entry title:</label>
                    <input type="text" name="title" value={title.title} onChange={handleTitleChange}/>
                
                <label>Entry:
                    <input type="textarea" name="entry" value={entry.textarea} onChange={handleEntryChange}/>
                </label>
                <input type="submit" value="submit"/>
                
            </form>
        </>
    )
}

export default JournalEntryForm 