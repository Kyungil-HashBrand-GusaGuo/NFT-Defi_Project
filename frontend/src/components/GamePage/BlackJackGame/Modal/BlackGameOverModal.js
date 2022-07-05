import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./BlackGameOverModal.css"

const BlackGameOverModal = () => {

    const navigate = useNavigate()

    const goToGameMainPage = () => {
        navigate('/gamemain')
    }

  return (
    <div className='blackOverlay'>
        <div className='blackGameModalContainer'>
          <div className='blackGameModalInfoSection'>  

              <h1 className='blackGameModalComMessage'>Game Over</h1>

              <button className='blackGameModalEndButton' onClick={goToGameMainPage}>Go to GamePage</button> 
          </div>
      </div>
    </div>
  )
}

export default BlackGameOverModal