import React, {useState, useEffect} from "react"
import './App.css';

function App() {
  
  const [deck, setDeck] = useState([])


  const fetchDeck = () => {
    fetch("http://rollthedice.setgetgo.com/")
    .then()

  }
  
  return (
    <div className="App">
    
      <h1>Alone Among The Stars</h1>

    </div>
  );
}

export default App;
