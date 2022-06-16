import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './StakingPage.css'
import { stakingViewAction } from '../redux/actions/stakingViewAction'
import { stakingAction } from '../redux/actions/stakingAction'
import { stakingCancelAction } from '../redux/actions/stakingCancelAction'
import { stakingRewardAction } from '../redux/actions/stakingRewardAction'

const StakingPage = () => {

    const dispatch = useDispatch()
    const {account} = useSelector(state => state.account)
    const [showid, setShowid] = useState("");
    const [unstakeid, setUnstakeid] = useState();
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

    const notStake = (id) => {
      setShowid(id);
    }

    const comStake = (id) => {
      setUnstakeid(id);
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
    <div class="style-five"></div>
    <hr class="style-five"/> 
    <div className='stakingPageContainer'>
        <div className='stakingZolToken'>
          <span>Your Mining Zola Token</span>
          <span> : {stakingReward} </span>
          <button onClick={getReward} className="claimBtn">Claim</button>
        </div>
        <div className='stakingZolToken'>
          <h3>My Zola Token : {getStakingReward} token</h3>
        </div>
        <div className='stakingPageTitle'>
          <span>
            Total :
          </span>
          <span> 
            Staking :
          </span>
          <span>
            Not Staking :
          </span>
        </div>
        <div className='notStakingContainer'>
          <div className='notStakingBoxContainer'>
            <div className='notStakingBoxSection'>
              <div>
                <h2>
                  Not Staking NFT : {showid}
                </h2>
              </div>
              <div className='noStakingCardMainContainer'>
              {
                myNftList !== '' ?
                myNftList.map((item, index)=> {
                return <div className='notStakingCardContainer'  key={index}>
                <div className='notStakingImgCard' onClick={()=>notStake(item)}
                style={{
                  backgroundImage: 
                      "url(" + 
                      `https://gateway.pinata.cloud/ipfs/QmfDCXHotQP7tH252h5BPEPX6kLmPJSzKzddnVxQUhrw4m/${item}.png` + 
                      ")"
                }}>
                </div>
              </div>
              
                })
                  : null
              }
              </div>
              <div className='notStakingBtn'>
                {/* <button className="learn-more">Staking</button> */}
                <button onClick={()=>staking(showid)} className="learn-more">Staking</button>
              </div>
            </div>
          </div>
            
        </div>

        <div className='comStakingContainer'>
          <div className='comStakingBoxContainer'>
            <div className='comStakingBoxSection'>
                <div>
                  <h2>
                    Staking UFT : {unstakeid}
                  </h2>
                </div>
                <div className='comStakginCardMainContainer'>
                {
                  stakingNftString !== '' ?
                  stakingNftString.map((item, index)=> {
                    return <div className='comStakingCardContainer' key={index}>
                    <div className='comStakingImgCard' onClick={()=>comStake(item)}
                      style={{
                        backgroundImage: 
                            "url(" + 
                            `https://gateway.pinata.cloud/ipfs/QmfDCXHotQP7tH252h5BPEPX6kLmPJSzKzddnVxQUhrw4m/${item}.png` + 
                            ")"
                      }}>
                    </div>
                  </div>
                  })
                  : null
                  }
                </div>
                <div className='comStakingBtn'>
                  <button onClick={()=>cancelStaking(unstakeid)} className="learn-more">UnStake</button>
                </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default StakingPage