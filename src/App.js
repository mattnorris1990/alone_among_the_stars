import React, {useState, useEffect} from "react"
import './App.css';
import GameContainer from "./containers/gameContainer";

function App() {
  
  const [deck, setDeck] = useState([])
  const [card, setCard] = useState(null)
  const [number, setNumber] = useState(null)
  const [entries, setEntries] = useState([])

  useEffect(() => {
    fetchDeck()
  }, [])

  // useEffect(()=> {
  //   fetchCard()
  // }, [deck])

  const fetchDeck = () => {
    fetch("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => res.json())
    .then(res =>setDeck(res))

  }

  const fetchCard = () => {
    fetch(`http://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`)
    .then(res => res.json())
    .then(res =>setCard(res))
  }

  const rollDice = () => {

    let result = Math.floor(Math.random() * 6) + 1

    setNumber(result)
  }

  const addJournalEntry = (entry) => {
    const currentEntries = [...entries]
    currentEntries.push(entry)

    setEntries(currentEntries)
  }

  
  
  return (
    <div className="App">
    
      <h1>Alone Among The Stars</h1>
      <GameContainer deck={deck} card={card} number={number} fetchCard = {fetchCard} rollDice = {rollDice} addJournalEntry = {addJournalEntry} />

    </div>
  );
}

export default App;
