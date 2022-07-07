import React, { useEffect, useState } from 'react';
import {
  Suits,
  Ranks,
  RanksValues,
  GAME,
  MENU,
  STAND,
  POST,
  BET,
  LOSE,
} from '../constants/CardInfo';
import logo from '../images/blackjack/logo.png';
import ten from '../images/blackjack/ten.png';
import quart from '../images/blackjack/quart.png';
import half from '../images/blackjack/half.png';
import hundo from '../images/blackjack/hundred.png';
import onek from '../images/blackjack/onek.png';
import Buttons from '../components/GamePage/BlackJackGame/Buttons/buttons';
import StarterCard from '../components/GamePage/BlackJackGame/Card/StarterCard';
import Chip from '../components/GamePage/BlackJackGame/Buttons/Chip';
import { BlackGameOverModal } from '../components/index'
import {BlackJackGameSetModal} from '../components/index'
import {white1} from '../images'

import 'tachyons';
import './BlackJackGame.css';
import { useDispatch, useSelector } from 'react-redux';
import { addChip, betChip, takeChip } from '../redux/actions/BlackBetAction';
import { useLocation } from 'react-router-dom';
import { stakingViewAction } from '../redux/actions/stakingViewAction';

const BlackJackGame = () => {

    const { state } = useLocation();
    console.log("번호",state);

    const Dealer = [
        {
          rank: Ranks[Math.floor(Math.random() * Ranks.length)],
          suit: Suits[Math.floor(Math.random() * Suits.length)],
        },
        {
          rank: Ranks[Math.floor(Math.random() * Ranks.length)],
          suit: Suits[Math.floor(Math.random() * Suits.length)],
        },
      ];
      const Player = [
        {
          rank: Ranks[Math.floor(Math.random() * Ranks.length)],
          suit: Suits[Math.floor(Math.random() * Suits.length)],
        },
        {
          rank: Ranks[Math.floor(Math.random() * Ranks.length)],
          suit: Suits[Math.floor(Math.random() * Suits.length)],
        },
      ];
      const [gameState, setGameState] = useState(MENU);
      const [playerCards, setPlayerCards] = useState(Player);
      const [dealerCards, setDealerCards] = useState(Dealer);
      const [title, setTitle] = useState('');
      const [playerScore, setPlayerScore] = useState(0);
      const [dealerScore, setDealerScore] = useState(0);
    //   const [gameOverModal, setGameOverModal] = useState(false);
      const [gameSetModal, setGameSetModal] = useState(false);
      const [turns, setTurns] = useState(0);
      const { total, bet } = useSelector((state) => state.blackjack);
      const {account} = useSelector(state => state.account)
      const {getGameTokenBalance } = useSelector(state => state.stakingView);
      const dispatch = useDispatch();
    
      const Hit = () => {
        const newCards = {
          rank: Ranks[Math.floor(Math.random() * Ranks.length)],
          suit: Suits[Math.floor(Math.random() * Suits.length)],
        };
        const updatedCards = playerCards.concat(newCards);
        let score = CountCard(updatedCards);
    
        setPlayerScore(score);
        setPlayerCards(updatedCards);

    
        if (score > 21) {
          setTitle('Bust!');
          setTurns(turns +1);
          setGameState(POST);
          setGameSetModal(true)
        }
      };
    
      const CountCard = (cards) => {
        let score = 0;
        let allAs = 0;
        for (let x in cards) {
          if (cards[x].rank === 'A') {
            allAs++;
          }
          score += RanksValues[cards[x].rank];
        }
    
        for (let i = 0; i < allAs; i++) {
          if (score > 21) {
            score -= 9;
          }
        }
    
        return score;
      };
    
      const DealerHit = () => {
        const newCards = {
          rank: Ranks[Math.floor(Math.random() * Ranks.length)],
          suit: Suits[Math.floor(Math.random() * Suits.length)],
        };
        const updatedCards = dealerCards.concat(newCards);
        let score = CountCard(updatedCards);
    
        setDealerScore(score);
        setDealerCards(updatedCards);
    
        if (score > 21) {
          setTitle('You Win!');
          //dispatch(takeChip(bet * 2));
          setGameState(POST);
          setTurns(turns +1);
          setGameSetModal(true)
          return;
        }
        if (score === playerScore) {
          setTitle('Tie!');
          dispatch(takeChip(bet));
          setGameState(POST);
          setTurns(turns +1);
          setGameSetModal(true)
          return;
        }
        if (playerScore < score) {
          setTitle('Dealer Win!');
          setGameState(POST);
          setTurns(turns +1);
          setGameSetModal(true)
        }
        console.log("게임턴",setTurns);
      };
    
      const Stand = () => {
        setGameState(STAND);
        if (playerScore < dealerScore) {
          setTitle('Dealer Win!');
          setGameState(POST);
          setTurns(turns +1);
          setGameSetModal(true)
        }
      };
    
      const Reset = () => {
        setPlayerCards(Player);
        setDealerCards(Dealer);
        setPlayerScore(0);
        setDealerScore(0);
        setTurns(0);
        dispatch(betChip());
        setTitle('');
      };
    
      const Bet = () => {
        setGameState(BET);
        setTitle('$0');
      };
    
      const pickChip = (value) => {
        dispatch(addChip(value));
        setTitle(`$${value + bet}`);


      };
    
      const StartGame = () => {
        setGameState(GAME);

        if (
          (playerCards[0].rank === 'A' &&
            RanksValues[playerCards[1].rank] === 10) ||
          (playerCards[1].rank === 'A' && RanksValues[playerCards[0].rank] === 10)
        ) {
          //dispatch(takeChip(bet * 2));
          setTitle('Blackjack!');
          setGameState(POST);
          setTurns(turns +1);
          setGameSetModal(true)
        }
        setPlayerScore(
          RanksValues[playerCards[0].rank] + RanksValues[playerCards[1].rank]
        );
        setDealerScore(
          RanksValues[dealerCards[0].rank] + RanksValues[dealerCards[1].rank]
        );
      };

  
      // const GameSet = () => {
      //   if(turns === 1) {
      //       setGameSetModal(true)
      //   } 
      // }

<<<<<<< HEAD
      useEffect(() =>{
            GameSet()
        }
      )

      useEffect( () => {
        dispatch(stakingViewAction.stakingViewAct(account))
    },[account])
=======
      // useEffect(() =>{
      //       GameSet()
      //   }
      // )
>>>>>>> 4a1a292ba957883d821f65e226a7c9f6ee9f1da2
    //   console.log(GameOver,"sdfdsfsdf");
    // console.log("게임턴",GameTurn);


  return (
    <div className='blackJackMainContainer'>
    <div>
      {/* { gameOverModal ? <BlackGameOverModal/> : null } */}
      { gameSetModal ? <BlackJackGameSetModal title={title} bet={bet}/> : null }
      <div className="center">
        <img style={{ width: 300 }} alt="logo" src={logo} />
      </div>
      {gameState === LOSE ? (
        <div className="center f3">
          <h1>You've lost it all!</h1>

          <Buttons gameState={gameState} setGameState={setGameState} />
        </div>
      ) : (
        <div
          className="center"
          style={{ display: 'flex', flexDirection: 'row' }}
        >
          <div className='myGameNftContainer' style={{ width: '20%' }}>
            <div className='myGameNftSection'>
                <img src={"https://sean95.s3.ap-northeast-2.amazonaws.com/raw/" + `${state[0]}` + ".png"}></img>
            </div>
          </div>
          <div style={{ width: '40%', minWidth: 350, paddingTop: '20px' }}>
            <StarterCard
              cardList={dealerCards}
              gameState={gameState}
              dealer={true}
            />
            <div className="center">
              <h1>{title}</h1>
            </div>
            <StarterCard
              cardList={playerCards}
              gameState={gameState}
              dealer={false}
            />
            <div className="center">
              <Buttons
                Hit={Hit}
                Stand={Stand}
                gameState={gameState}
                setGameState={setGameState}
                StartGame={StartGame}
                Reset={Reset}
                Result={DealerHit}
                Bet={Bet}
                addChip={addChip}
              />
            </div>
          </div>
          <div className="bank" style={{ width: '20%' }}>
            {gameState === BET ? (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Chip
                  value={1}
                  total={getGameTokenBalance}
                  addChip={pickChip}
                  imgSrc={ten}
                />
                <Chip
                  value={3}
                  total={getGameTokenBalance}
                  addChip={pickChip}
                  imgSrc={quart}
                />
                <Chip
                  value={5}
                  total={getGameTokenBalance}
                  addChip={pickChip}
                  imgSrc={half}
                />
                <Chip
                  value={10}
                  total={getGameTokenBalance}
                  addChip={pickChip}
                  imgSrc={hundo}
                />
                <Chip
                  value={20}
                  total={getGameTokenBalance}
                  addChip={pickChip}
                  imgSrc={onek}
                />
              </div>
            ) : (
              <div />
            )}
            <div
              style={{
                width: 105,
                borderRadius: 5,
                textAlign: 'center',
              }}
              className="pa1 ba b--black bg-yellow"
            >
              <h2>{`Token: $${getGameTokenBalance}`}</h2>
              {/* <h2>Token:{getGameTokenBalance}</h2> */}
              {/* <p>Turns:{turns}</p> */}
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default BlackJackGame