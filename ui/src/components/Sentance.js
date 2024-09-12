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
    const [anag, setAnag] = useState("");
    let sendSentance = async function (sentance) {
        console.log(sentance);
        resetSentance();
        const url = "http://localhost:3001/anagram";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sentance)
        });
        const json = await response.json();
        setAnag(json.sentance);
        console.log(json);
    };

    return <div>
        <SentanceBox className='Sentance' onClick={() => { sendSentance({ sentance }) }}>{sentance}</SentanceBox><br />
        <SentanceBox>{anag}</SentanceBox>
    </div>;
}
export default Sentance;