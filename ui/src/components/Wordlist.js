import styled from 'styled-components'
import React, { useState } from 'react';
import Wordlistwords from './Wordlistwords';


const WordlistBox = styled.div`
  display: inline-block;
  border-radius: 3px;
  padding: 1rem;
  margin: 1rem 1rem;
  background: transparent;
  border: 2px solid white;
  width:30rem;
  line-height:2rem;
  div {
    display:inline;
    border:1px grey solid;
    padding 2px;
    margin:2px;
      border-radius: 2px;
  }
`

function Wordlist({ wordadd }) {
    let makeWords = function () {
        return Wordlistwords
    }
    const [words, setWords] = useState(makeWords());
    return (
        <WordlistBox>
            {words.map((item, i) => { return <Word word={item} key={i} wordadd={wordadd} /> })}
        </WordlistBox>
    );
}
function Word({ word, wordadd }) {
    return <div onClick={() => wordadd({ word })} >{word} </div >
}

export default Wordlist;