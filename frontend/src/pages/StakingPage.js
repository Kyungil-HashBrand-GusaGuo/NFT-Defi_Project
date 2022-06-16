import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './StakingPage.css'
import { stakingViewAction } from '../redux/actions/stakingViewAction'
import { stakingAction } from '../redux/actions/stakingAction'
import { stakingCancelAction } from '../redux/actions/stakingCancelAction'
import { stakingRewardAction } from '../redux/actions/stakingRewardAction'
import { white1, white2, white3, white4, white5, 
  white6, white7, white8, white9, white10, 
  white11, white12, white13, white14, white15,
  white16, white17, white18, white19, white20,} from '../images'

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
                  Not Staking NFT
                </h2>
              </div>
              <div className='notStakingCardContainer'>
                <div className='notStakingImgCard'>
                  <img src={white1}></img>
                </div>
                <div className='notStakingImgCard'>
                  <img src={white2}></img>
                </div>
                <div className='notStakingImgCard'>
                  <img src={white3}></img>
                </div>
                <div className='notStakingImgCard'>
                  <img src={white4}></img>
                </div>
                <div className='notStakingImgCard'>
                  <img src={white5}></img>
                </div>
                <div className='notStakingImgCard'>
                  <img src={white6}></img>
                </div>
                <div className='notStakingImgCard'>
                  <img src={white7}></img>
                </div>
              </div>
              <div className='notStakingCardContainer'>
                <div className='notStakingImgCard'>
                  <img src={white8}></img>
                </div>
                <div className='notStakingImgCard'>
                  <img src={white9}></img>
                </div>
                <div className='notStakingImgCard'>
                  <img src={white10}></img>
                </div>
                <div className='notStakingImgCard'>
                  <img src={white11}></img>
                </div>
                <div className='notStakingImgCard'>
                  <img src={white12}></img>
                </div>
                <div className='notStakingImgCard'>
                  <img src={white13}></img>
                </div>
                <div className='notStakingImgCard'>
                  <img src={white14}></img>
                </div>
              </div>
              <div className='notStakingBtn'>
                <button className="learn-more">Staking</button>
              </div>
                {
                  myNftList !== '' ?
                  myNftList.map((item, index)=> {
                    return <div className='stakingBox' key={index}>
                          <div> # {item} </div>
                          <button onClick={()=>staking(item)}>스테이킹 함수 버튼</button>
                          </div>
                  })
                  : null
                }
            </div>
          </div>
        </div>
        <div className='comStakingContainer'>
          <div className='comStakingBoxContainer'>
            <div className='comStakingBoxSection'>
                <div>
                  <h2>
                    Staking UFT
                  </h2>
                </div>
                <div className='comStakingCardContainer'>
                  <div className='comStakingImgCard'>
                    <img src={white14}></img>
                  </div>
                  <div className='comStakingImgCard'>
                    <img src={white15}></img>
                  </div>
                  <div className='comStakingImgCard'>
                    <img src={white16}></img>
                  </div>
                  <div className='comStakingImgCard'>
                    <img src={white17}></img>
                  </div>
                  <div className='comStakingImgCard'>
                    <img src={white18}></img>
                  </div>
                  <div className='comStakingImgCard'>
                    <img src={white19}></img>
                  </div>
                  <div className='comStakingImgCard'>
                    <img src={white20}></img>
                  </div>
                </div>
                <div className='notStakingBtn'>
                  <button className="learn-more">UnStake</button>
                </div>
                <div>
                {
                  stakingNft !== '' ?
                  stakingNft.map((item, index)=> {
                    return <div className='stakingBox' key={index}>
                        <div> # {item} </div>
                        <button onClick={()=>cancelStaking(item)}>{item} 스테이킹 취소 함수</button>
                      </div>
                  })
                  : null
                }
                </div>
            </div>
          </div>
        </div>
          <h3>나의 NFT : {myNftList}</h3>
          <h3>스테이킹 NFT : {stakingNft}</h3>
          <h3>받을스테이킹 : {stakingReward} token</h3>
          <h3>받은스테이킹 : {getStakingReward} token</h3>
          <button onClick={getReward}>리워드 받기</button>
    </div>
    </>
  )
}

export default StakingPage