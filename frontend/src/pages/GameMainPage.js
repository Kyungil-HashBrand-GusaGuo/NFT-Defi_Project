import React, { useState, useEffect } from 'react'
import './GameMainPage.css'
import { useNavigate } from 'react-router-dom'
import { Game1, Game2, Game3 } from '../images'
import { GoldCrown,BrownCrown,SliverCrown } from '../images'
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
    <>
    { swapModal ? <SelectGameNftModal setSwapModal={setSwapModal}/> : null}
    <div className='cardGameTitleContainer'>
      <h2>Zolaman Game</h2>
    </div>
    <hr class="style-five"/> 
    <div className='gamePageMainContainer'>
        {
          airdropReward.length !== 1 ?
            <div className='nftRankContainer'>
              {/* <div className='leftZolImgContainer'>
                <img src={MainLeftZol}></img>
              </div> */}
              <div className='airdropConatiner'>
                <div className='gameRewardContainer'>
                  <div>
                    <div className='rankIconContainer'>
                      <img src={SliverCrown} className="crownIcon"></img>
                      <span>2st</span>
                    </div>
                    <div className='rankImgContainer'>
                      <img src={"https://sean95.s3.ap-northeast-2.amazonaws.com/raw/" + `${airdropReward[1]}` + ".png"}></img>
                    </div>
                  </div>
                  <div>
                    <div className='rankIconContainer'>
                      <img src={GoldCrown} className="crownIcon"></img>
                      <span>1st</span>
                    </div>
                    <div className='rankImgContainer'>
                      <img src={"https://sean95.s3.ap-northeast-2.amazonaws.com/raw/" + `${airdropReward[0]}` + ".png"}></img>
                    </div>
                  </div>
                  <div>
                    <div className='rankIconContainer'>
                      <img src={BrownCrown} className="crownIcon"></img>
                      <span>3st</span>
                    </div>
                    <div className='rankImgContainer'>
                      <img src={"https://sean95.s3.ap-northeast-2.amazonaws.com/raw/" + `${airdropReward[2]}` + ".png"}></img>
                    </div>
                  </div>
                </div>
                  {/* <div className='rightZolImgContainer'>
                    <img src={MainRightZol}></img>
                  </div> */}
                <div className='gameTimerContainer'>
                  <Timer/>
                </div>
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
                            <td>{arr.account.substr(0,10)}...{arr.account.slice(-10)}</td>
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
            </div>
          : <div className='alertAirdrop'><h1>AirDrop 준비중입니다..</h1></div>
        }
        <div className='gameSelectContainer'>
        <div className="testBorderContainer">
          <div className="gameBox1">
            <div class="box12">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div class="content12">
                <div className="gameTitle">
                  <p>Zolaman Memory Game</p>
                </div>
                <div className="gameDescriptionTxt">
                  <p>뒤집어진 카드를 맞춰서 GZLT 토큰을 획득 해보세요!</p>
                </div>
                <div className="gameThumbnail">
                  <img src={Game1}></img>
                </div>
                <div className="gameStartBtn">
                  <button onClick={goToCardGame} className="learn-more">
                    Start
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="gameBox2">
            <div class="box12">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div class="content12">
                <div className="gameTitle">
                  <p>Zolaman HangMan Game</p>
                </div>
                <div>
                  <p className="gameDescriptionTxt">
                    코인이름을 맞춰서 GZLT 토큰을 획득 해보세요!
                  </p>
                </div>
                <div className="gameThumbnail">
                  <img src={Game2}></img>
                </div>
                <div className="gameStartBtn">
                  <button onClick={goToHangManGame} className="learn-more">
                    Start
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="gameBox3">
            <div class="box12">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div class="content12">
                <div className="gameTitle">
                  <p>BlackJack Game</p>
                </div>
                <div>
                  <p className="gameDescriptionTxt">
                    딜러와 게임을 해서 GZLT 토큰을 획득 해보세요!
                  </p>
                </div>
                <div className="gameThumbnail">
                  <img src={Game3}></img>
                </div>
                <div className="gameStartBtn">
                  <button onClick={changeSwapModal} className="learn-more">
                    Start
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default GameMainPage