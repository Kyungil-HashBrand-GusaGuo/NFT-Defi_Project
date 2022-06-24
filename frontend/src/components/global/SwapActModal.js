import React, { useEffect } from 'react'
import './SwapActModal.css'
import { swapAction } from '../../redux/actions/swapAction'
import { useDispatch, useSelector } from 'react-redux'
import { swapModalAction } from '../../redux/actions/swapModalAction';

const SwapActModal = ({account, amount}) => {

    const dispatch = useDispatch()
    const { swapSuccess } = useSelector(state => state.stakingView)

    const closePage = () => {
      dispatch(swapModalAction.swapModalAct())
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
            <button className='sellModalEndButton' onClick={closePage} >Close Page</button> 
        </div>
        : <h2 className='sellMintingMessage'> Swap Loading...</h2> }
      </div>
  </div>
</div>
  )
}

export default SwapActModal