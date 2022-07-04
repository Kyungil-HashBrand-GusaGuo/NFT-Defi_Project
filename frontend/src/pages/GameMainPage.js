import React, { useState, useEffect, useRef } from 'react'
import './GameMainPage.css'
import { useNavigate } from 'react-router-dom'
import { Game1, Game2 } from '../images'
import { GoldCrown } from '../images'
import { white6 } from '../images'
import { white4 } from '../images'
import { white2 } from '../images'
import { useDispatch, useSelector } from 'react-redux'
import { gameViewAction } from '../redux/actions/gameViewAction'
import axios from 'axios'

const GameMainPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { gamePointRank } = useSelector(state => state.game)
    console.log("게임페이지", gamePointRank)
    const goToCardGame = () => {
        navigate('/cardgame')
    }
    const goToHangManGame = () => {
        navigate('/hangmangame')
    }

    let deadline = useRef(); 
    let timer = useRef(null); 
    
    let deadlineDate = new Date('July 05, 2022 12:45:00').getTime();
    let now = new Date().getTime();
    let t = deadlineDate - now;
    let day = Math.floor((t % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    
    const [state, setState] = useState({ day, hours, minutes, seconds});

    const count = () => {
      now = new Date().getTime();
      t = deadline - now;
      day = Math.floor((t % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
      hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((t % (1000 * 60)) / 1000);

      setState({ day, hours, minutes, seconds });

      if (t < -700 && t > -1500) {
        clearInterval(timer);
        setState({ day: 0, hours: 0, minutes: 0, seconds: 0 });
        console.log("t", t)
        testFunc()
      } 
    }

    const testFunc = async() => {
      const timerApi = await axios.post("http://localhost:9495/block/airdropapprove")
      if(timerApi.status){
        const response = await axios.post("http://localhost:9495/block/airdrop", {
          firstaccount : "0xaC0d580B21118dB9Ea5d752d8950e9C2436575DE", 
          secondaccount : "0x663C6cBA85bA17d949F9d14232bDAEE5b543Bac0", 
          thirdaccount : "0x9390FeF4821750A3FD704380C078D127C1de8dea", 
          firstedition : 10002, 
          secondedition : 700, 
          thirdedition : 241
        })
      
        console.log(response)
      }
    }

    useEffect(() => {
      dispatch(gameViewAction.gameViewAct())
      deadline = new Date('July 05, 2022 12:45:00').getTime();
      timer.current = setInterval(count, 1000);  
    },[])

  return (
    <div className='gamePageMainContainer'>
        <div className='cardGameTitleContainer'>
        <h2>Zolaman Game</h2>
        </div>
        <div className='nftRankContainer'>
          <div className='test1'>
            {/* <span>2위</span> */}
            <img src={white6}></img>
            <div className='test2'>
              <img src={GoldCrown} className="crownIcon"></img>
            </div>
          </div>
          <div>
            <span>1위</span>
            <img src={GoldCrown} className="crownIcon"></img>
            <div className='rankImgContainer'>
              <img src={white4}></img>
            </div>
          </div>
          <div>
            <span>3위</span>
            <img src={GoldCrown} className="crownIcon"></img>
            <div className='rankImgContainer'>
              <img src={white2}></img>
            </div>
          </div>
        </div>
        {/* <div className='gameTimerContainer'>
          <span>
            Timer
          </span>
        </div> */}
        <div className='gameTimerContainer'>
          <span>민팅 까지 남은 시간</span><br />
          <span>
            {state.day < 10 ? `0${state.day}` : state.day}D 
            &nbsp;{state.hours < 10 ? `0${state.hours}` : state.hours}h 
            &nbsp;{state.minutes < 10 ? `0${state.minutes}` : state.minutes}m
            &nbsp;{state.seconds < 10 ? `0${state.seconds}` : state.seconds}s
          </span>
        </div>

        <div className='gameScoreTable'>
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Account</th>
                <th>GamePoint</th>
              </tr>
            </thead>
            <tbody>
              {
                gamePointRank !== null ?
                  gamePointRank.map((arr, index) => {
                    return <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{arr.account}</td>
                      <td>{arr.point}</td>
                    </tr>
                  })
                : null
              }
            </tbody>
          </table>
        </div>
        <div className='anitest1'>
        </div>
        <div className='testmain'>
            <div className='testsection'>
                <div className='testmain1'>
                    <div className='gameTitle'>
                        <span>Zolaman Memory Game</span>
                    </div>
                    <div className='gameDescriptionTxt'>
                        <span>
                            뒤집어진 카드를 맞춰서 GZLT 토큰을 획득 해보세요!
                        </span>
                    </div>
                    <div className='gameThumbnail'>
                        <img src={Game1}></img>
                    </div>
                    <div className='gameStartBtn'>
                        <button onClick={goToCardGame} className="learn-more">Start</button>
                    </div>
                </div>
                <div className='testmain2'>
                    <div className='gameTitle'>
                        <span>Zolaman HangMan Game</span>
                    </div>
                    <div>
                      <span className='gameDescriptionTxt'>
                        코인이름을 맞춰서 GZLT 토큰을 획득 해보세요!
                      </span>
                    </div>
                    <div className='gameThumbnail'>
                        <img src={Game2}></img>
                    </div>
                    <div className='gameStartBtn'>
                        <button onClick={goToHangManGame} className="learn-more">Start</button>
                    </div>

                </div>
                <div className='testmain3'>
                    <div className='gameTitle'>
                        <span>Game3</span>
                    </div>
                    <div className='gameStartBtn'>
                        <button onClick={goToCardGame} className="learn-more">Start</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className='gameBoxContainer'>
                        <div class="box">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div class="content">
                            <h2>Zolaman Memory Game</h2>
                            <p>
                                <button onClick={goToCardGame}>Start</button>
                            </p>
                            </div>
                        </div>
                    </div> */}
        
       
    </div>
    
  )
}

export default GameMainPage