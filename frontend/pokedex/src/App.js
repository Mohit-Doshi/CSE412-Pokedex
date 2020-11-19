import React, { useState } from 'react';
import logo from './elephant.png';
import './App.css';

function App() {
  const [response, setResponse] = useState("")
  //makes an api call with the query as a parameter
  const callAPI = (query) => {
    fetch(`http://localhost:3001/${query}`)
      .then(res => res.text())
      .then(res => {
        setResponse(res)
        alert(res)
      })
  }

  const getGame = () => {
    let query = "games"
    callAPI(query)
  }

  return (
    <div className="App">
      <button onClick={getGame}>Get Game List</button>
    </div>
  );
}

export default App;
