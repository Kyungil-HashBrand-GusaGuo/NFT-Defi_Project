import React from 'react'
import { useEffect, useState } from 'react';
import SingleCard from '../components/GamePage/SingleCard';
import './CardGame.css'
import { useSelector } from 'react-redux'
import api from "../redux/api";
import { GameSetModal, GameOverModal} from '../components/index' 

const cardImages = [
    {"src": "/img/1.png", matched: false },
    {"src": "/img/2.png", matched: false },
    {"src": "/img/3.png", matched: false },
    {"src": "/img/4.png", matched: false },
    {"src": "/img/5.png", matched: false },
    {"src": "/img/6.png", matched: false },
  ]

function CardGame() {

  const {account} = useSelector(state => state.account)
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [counts, setCounts] = useState(0);
  const [gameSetModalCheck, setGameSetModalCheck] = useState(false)
  const [gameOverModalCheck, setGameOverModalCheck] = useState(false)
  const [gzlt , setGzlt] = useState(0)
  const [gamePoint , setGamePoint] = useState(0)

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

      setChoiceOne(null);
      setChoiceTwo(null);
      setCards(shuffledCards);
      setTurns(0);
      setCounts(0);
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
        SetCount();
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
  
  const SetCount = () => {
    setCounts(prevCounts => prevCounts + 1);
  }
  
  const GameSet = async() => {
    let result, point;
    if(turns >=6 && turns <= 8) {
      result = 5;
      point = 10;
    } else if (turns >= 9 && turns <= 11) {
      result = 3;
      point = 5;
    } else if (turns >= 12 && turns <= 14) {
      result = 1;
      point = 3;
    }
    if(counts === 6) {
      const response = await api.post("/memorygame", {account, result});
      if(response.status) {
      alert(`게임 승리! ${result} GZLT, ${point} GP 획득!`)
        setGameSetModalCheck(true)
        setGzlt(result);
        setGamePoint(point)
      }

      console.log("게임토큰", result)
      console.log("게임포인튼", point)
    }
  }

  const GameOver = () => {
    if(turns > 14) {
      //alert("Game Over");
      setGameOverModalCheck(true)
      shuffleCards()
    }
  }
  GameOver();

  // setTimeout(GameSet, 1000)
  // GameSet()

  useEffect(() => {
    shuffleCards();
  }, [])

  useEffect(() => {
    GameSet();
  }, [counts])

  console.log("콘솔몇번찍힐까")

  return (
    <>
    { gameSetModalCheck ? <GameSetModal gzlt={gzlt} gamePoint={gamePoint}/> : null }
    { gameOverModalCheck ? <GameOverModal/> : null }
    <div className="gameMainContainer">
      <div className='cardGameTitleContainer'>
        <h2>Zolaman Memory Game</h2>
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
    </>
  );
}

export default CardGame;
