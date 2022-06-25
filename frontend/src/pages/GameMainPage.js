import React from 'react'
import './GameMainPage.css'
import { useNavigate } from 'react-router-dom'
import { Thum1 } from '../images'


const GameMainPage = () => {

    const navigate = useNavigate()

    const goToCardGame = () => {
        navigate('/cardgame')
    }
    const goToHangManGame = () => {
        navigate('/hangmangame')
    }
  return (
    <div className='gamePageMainContainer'>
        <div className='cardGameTitleContainer'>
        <h2>Zolaman Game</h2>
        </div>
        <div className='gameScoreTable'>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Score</th>
                <th>Rank</th>
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
              {/* <tr>
                <td>12~14</td>
                <td>1 GZLT</td>
                <td>3</td>
              </tr> */}
              
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
                        <img src={Thum1}></img>
                    </div>
                    <div className='gameStartBtn'>
                        <button onClick={goToCardGame} className="learn-more">Start</button>
                    </div>
                </div>
                <div className='testmain2'>
                    <div className='gameTitle'>
                        <span>Zolaman HangMan Game</span>
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