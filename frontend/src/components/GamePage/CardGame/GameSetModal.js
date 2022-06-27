import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./GameModal.css"
import headzol2 from '../../../images/headzol2.png'

const GameSetModal = ({gzlt, gamePoint}) => {

    const navigate = useNavigate()

    const goToGameMainPage = () => {
        navigate('/gamemain')
    }

  return (
    <div className='overlay'>
        <div className='gameModalContainer'>
          <div className='gameModalInfoSection'>  
            {/* { successClaim ?
            <div>
              <h2 className='gameModalComMessage'>Claim Success!!!</h2>
              <button className='gameModalEndButton' onClick={goToStake}>Go to Staking</button> 
            </div>
            : <h2 className='gameModalMessage'> Claim Loading...</h2> } */}
              <h2 className='gameModalComMessage'>Game Clear!!!</h2>
              <h2 className='gameModalComMessage'>Get : {gzlt} GZLT<img className='gameModalIco' src={headzol2}/>  
              
                / {gamePoint} GP
              </h2>
              {/* <h2 className='gameModalComMessage'>{gamePoint} GP</h2> */}
              <button className='gameModalEndButton' onClick={goToGameMainPage}>Go to GamePage</button> 
          </div>
      </div>
    </div>
  )
}

export default GameSetModal