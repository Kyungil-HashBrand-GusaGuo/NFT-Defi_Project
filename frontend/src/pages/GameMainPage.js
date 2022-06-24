import React from 'react'
import './GameMainPage.css'
import { useNavigate } from 'react-router-dom'
import { Thum1 } from '../images'


const GameMainPage = () => {

    const navigate = useNavigate()

    const goToCardGame = () => {
        navigate('/cardgame')
    }
  return (
    <div className='gamePageMainContainer'>
        <div className='gamePageTitle'>
            <span>
                Game Main Page
            </span>
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
                            뒤집어진 카드를 맞춰서 GMT 토큰을 획득 해보세요!
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
                        <span>Game2</span>
                    </div>
                    <div className='gameStartBtn'>
                        <button onClick={goToCardGame} className="learn-more">Start</button>
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