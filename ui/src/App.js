
import './App.css';
import React, { useState } from 'react';
import Sentance from './components/Sentance';
import Wordlist from './components/Wordlist';


function App() {

  const [sentance, setSentance] = useState("");
  let wordadd = function (word) {
    setSentance(sentance + " " + word.word);

  }
  let resetSentance = function () { setSentance("") };
  return (
    <div className="App">
      <h1>build a sentance</h1>
      <Sentance sentance={sentance} resetSentance={resetSentance} /><br />
      <h3>click on words</h3>
      <Wordlist wordadd={wordadd} />
    </div>
  );
}

export default App;
