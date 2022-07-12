import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stakingRewardAction } from '../../redux/actions/stakingRewardAction'
import "./Modal.css"
//import { Link } from 'react-router-dom'

const ClaimModal = ({account}) => {

    const dispatch = useDispatch()
    const { successClaim } = useSelector(state => state.stakingView)

    const goToStake = () => {
      window.location.reload()
    }

    useEffect( () => {
        dispatch(stakingRewardAction.stakingRewardAct(account))
    },[])

  return (
    <div className='overlay'>
        <div className='stakingModalContainer'>
          <div className='stakingMintingInfoSection'>  
            { successClaim ?
            <div>
              <h2 className='stakingMintingComMessage'>Claim Success!!!</h2>
              <button className='stakingModalEndButton' onClick={goToStake}>Go to Staking</button> 
            </div>
            : <h2 className='stakingMintingMessage'> Claim Loading...</h2> }
          </div>
      </div>
    </div>
  )
}

export default ClaimModal