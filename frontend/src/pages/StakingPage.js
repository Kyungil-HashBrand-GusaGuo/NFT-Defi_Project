import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './StakingPage.css'
import { stakingViewAction } from '../redux/actions/stakingViewAction'

const StakingPage = () => {

    const dispatch = useDispatch()
    const {account} = useSelector(state => state.account)
    const {myNftList, stakingNft, stakingReward , getStakingReward} = useSelector(state => state.stakingView)
    
    console.log(account)
    useEffect( () => {
        dispatch(stakingViewAction.stakingViewAct(account))
    },[account])

  return (
    <div className='stakingPageContainer'>
        <h3>StakingPage</h3>
        <h3>나의 NFT : {myNftList}</h3>
        <h3>스테이킹 NFT : {stakingNft}</h3>
        <h3>받을스테이킹 : {stakingReward}</h3>
        <h3>받은스테이킹 : {getStakingReward}</h3>
    </div>
  )
}

export default StakingPage