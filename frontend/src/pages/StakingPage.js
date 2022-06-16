import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './StakingPage.css'
import { stakingViewAction } from '../redux/actions/stakingViewAction'
import { stakingAction } from '../redux/actions/stakingAction'
import { stakingCancelAction } from '../redux/actions/stakingCancelAction'
import { stakingRewardAction } from '../redux/actions/stakingRewardAction'

const StakingPage = () => {

    const dispatch = useDispatch()
    const {account} = useSelector(state => state.account)
    const {myNftList, stakingNft, stakingReward , getStakingReward} = useSelector(state => state.stakingView)
    
    const staking = (edition) => {
      dispatch(stakingAction.stakingAct(account, edition))
    }

    const cancelStaking = (edition) => {
      dispatch(stakingCancelAction.stakingCancelAct(account, edition))
    }

    const getReward = () => {
      dispatch(stakingRewardAction.stakingRewardAct(account))
    }

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
        {
          myNftList !== '' ?
          myNftList.map((item)=> {
            return <div><button onClick={()=>staking(item)}>{item} 스테이킹 함수</button></div>
          })
          : null
        }
        <div>==============================</div>
        {
          stakingNft !== '' ?
          stakingNft.map((item)=> {
            return <div><button onClick={()=>cancelStaking(item)}>{item} 스테이킹 취소 함수</button></div>
          })
          : null
        }
        <button onClick={getReward}>리워드 받기</button>
    </div>
  )
}

export default StakingPage