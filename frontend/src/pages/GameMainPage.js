import React, { useState, useEffect, useRef } from 'react'
import './GameMainPage.css'
import { useNavigate } from 'react-router-dom'
import { Game1, Game2, Game3 } from '../images'
import { GoldCrown } from '../images'
import { white6 } from '../images'
import { white4 } from '../images'
import { white2 } from '../images'
import { useDispatch, useSelector } from 'react-redux'
import { gameViewAction } from '../redux/actions/gameViewAction'
import { rewardEditionGetAction } from '../redux/actions/rewardEditionGetAction'
import { Timer } from '../components'
import {SelectGameNftModal} from '../components/index'
import {MainLeftZol, MainRightZol} from '../images/index'

const GameMainPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [swapModal, setSwapModal] = useState(false);
    const { gamePointRank, airdropReward } = useSelector(state => state.game)
    // console.log("게임포인트랭크", gamePointRank)
    // console.log("에어드랍리워드",airdropReward)
    
    const goToCardGame = () => {
        navigate('/cardgame')
    }
    const goToHangManGame = () => {
        navigate('/hangmangame')
    }

    const goToBlackJackGame =() => {
      navigate('/blackjackgame')
    }

    const changeSwapModal = () => {
      setSwapModal(true)
    }

    useEffect(() => {
      dispatch(gameViewAction.gameViewAct())
      dispatch(rewardEditionGetAction.rewardEditionGetAct())
    },[])

  return (
    <div className='gamePageMainContainer'>
        { swapModal ? <SelectGameNftModal setSwapModal={setSwapModal}/> : null}
        <div className='cardGameTitleContainer'>
        <h2>Zolaman Game</h2>
        </div>
        
        {
          airdropReward !== null ?
            <div className='nftRankContainer'>
              <div className='leftZolImgContainer'>
                <img src={MainLeftZol}></img>
              </div>
              <div>
                <span>2위</span>
                <img src={GoldCrown} className="crownIcon"></img>
                <div className='rankImgContainer'>
                  <img src={"https://sean95.s3.ap-northeast-2.amazonaws.com/raw/" + `${airdropReward[1]}` + ".png"}></img>
                </div>
              </div>
              <div>
                <span>1위</span>
                <img src={GoldCrown} className="crownIcon"></img>
                <div className='rankImgContainer'>
                  <img src={"https://sean95.s3.ap-northeast-2.amazonaws.com/raw/" + `${airdropReward[0]}` + ".png"}></img>
                </div>
              </div>
              <div>
                <span>3위</span>
                <img src={GoldCrown} className="crownIcon"></img>
                <div className='rankImgContainer'>
                  <img src={"https://sean95.s3.ap-northeast-2.amazonaws.com/raw/" + `${airdropReward[2]}` + ".png"}></img>
                </div>
              </div>
              <div className='rightZolImgContainer'>
                <img src={MainRightZol}></img>
              </div>
            </div>
          : null
        }

        <div className='gameTimerContainer'>
          <Timer gamePointRank={gamePointRank} airdropReward={airdropReward}/>
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
        <div className='gameSelectContainer'>
            <div className='gameSelectSection'>
                <div className='gameBox1'>
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
                <div className='gameBox2'>
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
                <div className='gameBox3'>
                    <div className='gameTitle'>
                        <span>BlackJack Game</span>
                    </div>
                    <div>
                      <span className='gameDescriptionTxt'>
                        딜러와 게임을 해서 GZLT 토큰을 획득 해보세요!
                      </span>
                    </div>
                    <div className='gameThumbnail'>
                      <img src={Game3}></img>
                    </div>
                    <div className='gameStartBtn'>
                        <button onClick={changeSwapModal} className="learn-more">Modal</button>
                        <button onClick={goToBlackJackGame} className="learn-more">Black</button>
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