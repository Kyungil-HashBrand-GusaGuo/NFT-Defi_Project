import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './StakingPage.css'
import { stakingViewAction } from '../redux/actions/stakingViewAction'

const StakingPage = () => {

    const dispatch = useDispatch()
    const {account} = useSelector(state => state.account)
    console.log(account)
    useEffect( () => {
        dispatch(stakingViewAction.stakingViewAct(account))
    },[account])

  return (
    <div className='stakingPageContainer'>
        <h3>StakingPage</h3>
        <h3>StakingPage</h3>
        <h3>StakingPage</h3>
        <h3>StakingPage</h3>
        <h3>StakingPage</h3>
    </div>
  )
}

export default StakingPage