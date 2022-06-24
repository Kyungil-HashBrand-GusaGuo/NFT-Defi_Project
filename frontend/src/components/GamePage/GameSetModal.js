import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { stakingRewardAction } from '../../redux/actions/stakingRewardAction'
import "../StakingPage/Modal.css"

const GameSetModal = ({gzlt, gamePoint}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { successClaim } = useSelector(state => state.stakingView)

    const goToStake = () => {
        navigate('/gamemain')
    }

    // useEffect( () => {
    //     dispatch(stakingRewardAction.stakingRewardAct(account))
    // },[])

  return (
    <div className='overlay'>
        <div className='stakingModalContainer'>
          <div className='stakingMintingInfoSection'>  
            {/* { successClaim ?
            <div>
              <h2 className='stakingMintingComMessage'>Claim Success!!!</h2>
              <button className='stakingModalEndButton' onClick={goToStake}>Go to Staking</button> 
            </div>
            : <h2 className='stakingMintingMessage'> Claim Loading...</h2> } */}
              <h2 className='stakingMintingComMessage'>Game Clear!!!</h2>
              <h3 className='stakingMintingComMessage'>{gzlt} GZLT</h3>
              <h3 className='stakingMintingComMessage'>{gamePoint} GP</h3>
              <button className='stakingModalEndButton' onClick={goToStake}>Go to GamePage</button> 
          </div>
      </div>
    </div>
  )
}

export default GameSetModal