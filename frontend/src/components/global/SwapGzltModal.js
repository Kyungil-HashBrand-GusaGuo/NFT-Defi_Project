import React, { useEffect } from 'react'
import './SwapActModal.css'
import { swapGzltAction } from '../../redux/actions/swapGzltAction'
import { useDispatch, useSelector } from 'react-redux'
import { swapModalAction } from '../../redux/actions/swapModalAction';

const SwapGzltModal = ({account, amount}) => {

    const dispatch = useDispatch()
    const { swapGzltSuccess } = useSelector(state => state.stakingView)

    const closePage = () => {
      dispatch(swapModalAction.swapModalAct())
    }

    useEffect( () =>{
        dispatch(swapGzltAction.swapGzltAct(account, amount))
    },[]) 

  return (
    <div className='overlay'>
    <div className='swapActModalContainer'>
      <div className='swapMintingInfoSection'>  
        { swapGzltSuccess ?
        <div>
            <h2 className='swapMintingComMessage'>GZLT Swap Success!!!</h2>
            <button className='sellModalEndButton' onClick={closePage}>Close Page</button> 
        </div>
        : <h2 className='sellMintingMessage'>GZLT Swap Loading...</h2> }
      </div>
  </div>
</div>
  )
}

export default SwapGzltModal