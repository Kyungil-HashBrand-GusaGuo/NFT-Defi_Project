import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./GameModal.css"

const GameOverModal = () => {

    const navigate = useNavigate()

    const goToGameMainPage = () => {
        navigate('/gamemain')
    }

  return (
    <div className='overlay'>
        <div className='gameModalContainer'>
          <div className='gameModalInfoSection'>  

              <h1 className='gameModalComMessage'>Game Over</h1>

              <button className='gameModalEndButton' onClick={goToGameMainPage}>Go to GamePage</button> 
          </div>
      </div>
    </div>
  )
}

export default GameOverModal