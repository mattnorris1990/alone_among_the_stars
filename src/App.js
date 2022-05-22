import React, {useState, useEffect} from "react"
import './App.css';
import GameContainer from "./containers/gameContainer";
import Start from "./components/Start";


function App() {
  
  const [deck, setDeck] = useState([])
  const [card, setCard] = useState(null)
  const [number, setNumber] = useState(null)
  const [entries, setEntries] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [name, setName] = useState(null)
  const [shipName, setShipName] = useState(null)

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
      
      {name ? <GameContainer deck={deck} card={card} number={number} entries = {entries} fetchCard = {fetchCard} rollDice = {rollDice} addJournalEntry = {addJournalEntry} /> : <Start setName = {setName} setShipName = {setShipName}/> }

    </div>
  );
}

export default App;
