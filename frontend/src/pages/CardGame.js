import React from 'react'
import { useEffect, useState } from 'react';
import SingleCard from '../components/GamePage/SingleCard';
import './CardGame.css'

const cardImages = [
    {"src": "/img/1.png", matched: false },
    {"src": "/img/2.png", matched: false },
    {"src": "/img/3.png", matched: false },
    {"src": "/img/4.png", matched: false },
    {"src": "/img/5.png", matched: false },
    {"src": "/img/6.png", matched: false },
  ]

function CardGame() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

      setChoiceOne(null);
      setChoiceTwo(null);
      setCards(shuffledCards);
      setTurns(0);
  }

  // handle a choice
  const handleChoice =(card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  // compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true};
            } else {
              return card;
            }
          })
        });
        resetTurn();
      } else {
       setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  }

  useEffect(() => {
    shuffleCards();
  }, [])

  return (
    <div className="gameMainContainer">
      <div className='cardGameTitle'>
        <h1>Zolaman Memory Game</h1>
      </div>
      <div className='allCardGameContainer'>
        <div className='cardGameContainer'>
        <button className='startBtn' onClick={shuffleCards}>New game</button>
        <p>Turns: {turns}</p>
        <div className="card-grid">
            {cards.map(card => (
            <SingleCard 
                key={card.id} 
                card={card}
                handleChoice={handleChoice}
                flipped={card === choiceOne || card == choiceTwo || card.matched}
                disabled={disabled}
                />
            ))}
        </div>
        </div>
        <div className='gameRoleContainer'>
        <div className='gameRoleTitle'>
          <h2>Card Game Role</h2>
        </div>
        <div className='gameRoleTable'>
          <table>
            <thead>
              <tr>
                <th>Turn</th>
                <th>Token</th>
                <th>Game Point</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>6~8</td>
                <td>5 GZLT</td>
                <td>10</td>
              </tr>
              <tr>
                <td>9~11</td>
                <td>3 GZLT</td>
                <td>5</td>
              </tr>
              <tr>
                <td>12~14</td>
                <td>1 GZLT</td>
                <td>3</td>
              </tr>
              <tr>
                <td>15</td>
                <td>X</td>
                <td>X</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CardGame;
