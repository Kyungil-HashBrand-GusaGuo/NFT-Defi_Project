import React, { useEffect } from 'react'
import './SwapActModal.css'
import { swapAction } from '../../redux/actions/swapAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SwapActModal = ({account, amount}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { swapSuccess } = useSelector(state => state.stakingView)

    const goToStaking = () => {
        navigate('/staking')
    }

    useEffect( () =>{
        dispatch(swapAction.swapAct(account, amount))
    },[]) 

  return (
    <div className='overlay'>
    <div className='swapActModalContainer'>
      <div className='swapMintingInfoSection'>  
        { swapSuccess ?
        <div>
            <h2 className='swapMintingComMessage'>Swap Success!!!</h2>
            <button className='sellModalEndButton' onClick={goToStaking} >Go to Staking</button> 
        </div>
        : <h2 className='sellMintingMessage'> Swap Loading...</h2> }
      </div>
  </div>
</div>
  )
}

export default SwapActModal