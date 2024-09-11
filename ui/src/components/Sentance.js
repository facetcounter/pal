import styled from 'styled-components'
import React, { useState } from 'react';

const SentanceBox = styled.div`
  display: inline-block;
  border-radius: 3px;
  padding: 1rem;
  margin: 0.5rem 1rem;
  background: #ccc;
  border: 2px solid black;
  width:30rem;

`

function Sentance({ sentance, resetSentance }) {
    let sendSentance = async function (sentance) {
        console.log(sentance);
        resetSentance();
        return;
        const url = "https://localhost:3001/anagram";
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
    };

    return <SentanceBox className='Sentance' onClick={() => { sendSentance({ sentance }) }}>{sentance}</SentanceBox>;
}
export default Sentance;