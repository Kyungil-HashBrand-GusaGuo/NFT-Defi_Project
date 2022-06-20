import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './StakingPage.css'
import { stakingViewAction } from '../redux/actions/stakingViewAction'
import { stakingAction } from '../redux/actions/stakingAction'
import { stakingCancelAction } from '../redux/actions/stakingCancelAction'
import { stakingRewardAction } from '../redux/actions/stakingRewardAction'
import { GrRefresh } from "react-icons/gr";


const StakingPage = () => {

    const dispatch = useDispatch()
    const {account} = useSelector(state => state.account)
    const {myNftList, stakingNftString, stakingReward , getStakingReward} = useSelector(state => state.stakingView)

    const staking = (edition) => {
      dispatch(stakingAction.stakingAct(account, edition))
    }

    const cancelStaking = (edition) => {
      dispatch(stakingCancelAction.stakingCancelAct(account, edition))
    }

    const getReward = () => {
      dispatch(stakingRewardAction.stakingRewardAct(account))
    }

    const changeState = () =>{
      dispatch(stakingViewAction.stakingViewAct(account))
    }

    let nonStakeArr = []
    let comStakeArr = []

    const notStake = (id) => {
      if(nonStakeArr.includes(id)){
        for(let i = 0; i < nonStakeArr.length; i++) {
          if(nonStakeArr[i] === id)  {
            nonStakeArr.splice(i, 1);
          }
        }
        //console.log("삭제된건가?",nonStakeArr)
      } else {
        nonStakeArr.push(id)
        //console.log("배열들어오니",nonStakeArr)
      }
      console.log("Non스테이팅 배열확인", nonStakeArr)
      // let testaa = nonStakeArr
      //setShowid(...nonStakeArr)
    }

    const comStake = (id) => {
      if(comStakeArr.includes(id)){
        for(let i = 0; i < comStakeArr.length; i++) {
          if(comStakeArr[i] === id)  {
            comStakeArr.splice(i, 1);
          }
        }
        //console.log("삭제된건가?",nonStakeArr)
      } else {
        comStakeArr.push(id)
        //console.log("배열들어오니",nonStakeArr)
      }
      console.log("스테이킹 배열확인", comStakeArr)
      // let testaa = nonStakeArr
      //setShowid(...nonStakeArr)
    }

    console.log(account)
    useEffect( () => {
        dispatch(stakingViewAction.stakingViewAct(account))
    },[account])

  return (
    <>
    <div className='stakingTitleContainer'>
              <h2>Staking</h2>
    </div>
    <div className="style-five"></div>
    <hr className="style-five"/> 
    <div className='stakingPageContainer'>
        <div className='stakingZolToken'>
          <span>Your Mining Zola Token : </span>
          {/* {
            nonStakeArr !== null ?
            nonStakeArr.map((item)=>{
              return {item} 
            }) 
            : null
          } */}
          <span> : {stakingReward} </span>
          <button className="claimBtn" onClick={changeState}>
          <GrRefresh />
          </button>
          
          <button onClick={getReward} className="claimBtn">Claim</button>
        </div>
        <div className='stakingZolToken'>
          <h3>My Zola Token : {getStakingReward} token</h3>
        </div>
        <div className='stakingPageTitle'>
          <span className='stakingPageSpan1'>
            Total : {myNftList.length + stakingNftString.length}
          </span>
          <span className='stakingPageSpan1'>
            Not Staking : {myNftList.length}
          </span>
          <span className='stakingPageSpan2'> 
            Staking : {stakingNftString.length}
          </span>
        </div>
        <div className='notStakingContainer'>
          <div className='notStakingBoxContainer'>
            <div className='notStakingBoxSection'>
              <div>
                <h2>
                  Not Staking NFT :
                </h2>
              </div>
              <div className='notStakingCardMainContainer'>
              {
                myNftList !== '' ?
                myNftList.map((item, index)=> {
                return <div className='notStakingCardContainer'  key={index}>
                <div className='notStakingImgCard'
                style={{
                  backgroundImage: 
                      "url(" + 
                      `https://gateway.pinata.cloud/ipfs/QmfDCXHotQP7tH252h5BPEPX6kLmPJSzKzddnVxQUhrw4m/${item}.png` + 
                      ")"
                }}>
                  <input type='checkbox' onClick={()=>notStake(item)}/>
                </div>
              </div>
              
                })
                  : null
              }
              </div>
              <div className='notStakingBtn'>
                {/* <button className="learn-more">Staking</button> */}
                <button onClick={()=>staking(nonStakeArr)} className="learn-more">Staking</button>
              </div>
            </div>
          </div>
            
        </div>

        <div className='comStakingContainer'>
          <div className='comStakingBoxContainer'>
            <div className='comStakingBoxSection'>
                <div>
                  <h2>
                    Staking UFT : 
                  </h2>
                </div>
                <div className='comStakginCardMainContainer'>
                {
                  stakingNftString !== '' ?
                  stakingNftString.map((item, index)=> {
                    return <div className='comStakingCardContainer' key={index}>
                    <div className='comStakingImgCard'
                      style={{
                        backgroundImage: 
                            "url(" + 
                            `https://gateway.pinata.cloud/ipfs/QmfDCXHotQP7tH252h5BPEPX6kLmPJSzKzddnVxQUhrw4m/${item}.png` + 
                            ")"
                      }}>
                      <input type='checkbox' onClick={()=>comStake(item)}/>
                    </div>
                  </div>
                  })
                  : null
                  }
                </div>
                <div className='comStakingBtn'>
                  <button onClick={()=>cancelStaking(comStakeArr)} className="learn-more">UnStake</button>
                </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default StakingPage