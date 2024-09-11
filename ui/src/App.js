
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
      <Sentance sentance={sentance} resetSentance={resetSentance} /><br />
      <Wordlist wordadd={wordadd} />
    </div>
  );
}

export default App;
