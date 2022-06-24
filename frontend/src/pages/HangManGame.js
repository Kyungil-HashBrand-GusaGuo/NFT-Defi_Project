import React, {useState} from 'react'
import './HangManGame.css'
import {Hangman} from '../components'

import { WordAndAlphabet}  from '../components'
import { words } from '../components/GamePage/wordBank'

const HangManGame = () => {

    let selectedWord = words[Math.floor(Math.random() * words.length)];

    const [correctLetters, setCorrectLetters] = useState([]);
      const [wrongLetters, setWrongLetters] = useState([]);
      const [playable, setPlayable] = useState(true);
      const [won, setWon] = useState(false);
    
      const playAgain = () => {
        setPlayable(true);
        setCorrectLetters([]);
        setWrongLetters([]);
        selectedWord = words[Math.floor(Math.random() * words.length)];
        setWon(false);
        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
          button.disabled = false; 
        });
      }
    
  return (
    <div className='HangManMainContainer'>
    <div className='HangManContainer'>
        <Hangman
        wrongLetters={wrongLetters}
        playable={playable}
        playAgain={playAgain}
        won={won}
        word = {selectedWord}
      />
      <WordAndAlphabet
        word={selectedWord}
        wrongLetters={wrongLetters}
        setWrongLetters={setWrongLetters}
        correctLetters={correctLetters}
        setCorrectLetters={setCorrectLetters}
        setPlayable={setPlayable}
        playable={playable}
        setWon={setWon}
        
      />
    </div>
    </div>
  )
}

export default HangManGame