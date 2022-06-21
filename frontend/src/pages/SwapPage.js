import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './SwapPage.css'
import { swapAction } from '../redux/actions/swapAction'
import { stakingViewAction } from '../redux/actions/stakingViewAction'

const SwapPage = () => {

  const dispatch = useDispatch()
  const [amount, setAmount] = useState()
  const {account} = useSelector(state => state.account)
  const {getStakingReward, getKlayBalance} = useSelector(state => state.stakingView)


  const changeAmount = (e) => {
    setAmount(e.target.value)
  }

  const swapTest = () => {
    dispatch(swapAction.swapAct(account, amount))
  }

  useEffect ( () => {
    dispatch(stakingViewAction.stakingViewAct(account))
  },[account])

  return (
    <div className='swapPageContainer'>
        <div>SwapPage</div>
        <div>SwapPage</div>
        <div>SwapPage</div>
        <div>SwapPage</div>
        <div>SwapPage</div>
        <div>SwapPage</div>
        <div>SwapPage</div>
        <div>SwapPage</div>
        <div>SwapPage</div>
        <div>내가 가지고 있는 토큰 : {getStakingReward}</div>
        <div>Kaly Balance : {getKlayBalance}</div>
        <input type="number" min="1" placeholder='Amount' className='lefttxtinput' onChange={changeAmount}/>
        <button  className="learn-more"onClick={swapTest}>SWAP</button>
    </div>
  )
}

export default SwapPage