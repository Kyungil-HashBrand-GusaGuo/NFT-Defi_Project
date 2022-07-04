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
import { Timer } from '../components'

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

    useEffect(() => {
      dispatch(gameViewAction.gameViewAct())
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

        <div className='gameTimerContainer'>
          <Timer/>
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
                : <tr>
                    <td>asdf</td>
                    <td>appendDots</td>
                    <td></td>
                  </tr>
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