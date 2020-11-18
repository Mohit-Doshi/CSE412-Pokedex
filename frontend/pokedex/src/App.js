import React from 'react';
import logo from './elephant.png';
import './App.css';

function App() {
  const [response, setResponse] = useState("")
  const callAPI = (query) => {
    fetch(`http://localhost:9000/${query}`)
      .then(res => res.text())
      .then(res =)
  }
  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
