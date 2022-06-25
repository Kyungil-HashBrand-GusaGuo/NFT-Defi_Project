import React, {useEffect, useState} from 'react'
import './HangManGame.css'
import {Hangman} from '../components'
import { WordAndAlphabet}  from '../components'
import { words } from '../components/GamePage/wordBank'

const HangManGame = () => {

      const [correctLetters, setCorrectLetters] = useState([]);
      const [wrongLetters, setWrongLetters] = useState([]);
      const [playable, setPlayable] = useState(true);
      const [won, setWon] = useState(false);
      const [selectedWord, setSelectedWord] = useState('')

      const playAgain = () => {
        setPlayable(true);
        setCorrectLetters([]);
        setWrongLetters([]);
        setWon(false);
        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
          button.disabled = false; 
        });
        let selectedRandomWord = words[Math.floor(Math.random() * words.length)];
        setSelectedWord(selectedRandomWord)
      }
    
      useEffect ( () => {
        let selectedRandomWord = words[Math.floor(Math.random() * words.length)];
        setSelectedWord(selectedRandomWord)
      },[])

  return (
    <div className='HangManMainContainer'>
      {
        selectedWord !== '' ?
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
        : null
      }
    </div>
  )
}

export default HangManGame