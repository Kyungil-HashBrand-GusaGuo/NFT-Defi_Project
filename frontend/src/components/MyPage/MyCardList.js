import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './MyCardList.css'
import klayIcon2 from '../../images/klaytn.png'
import { mypageAction } from '../../redux/actions/mypageAction';
import { useNavigate } from 'react-router-dom';
import { marketAction } from '../../redux/actions/marketAction';
import { stakingViewAction } from '../../redux/actions/stakingViewAction'

const MyCardList = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { account } = useSelector(state => state.account);
    const { mymintdata } = useSelector(state => state.mintdata)
    const { sellingNftId } = useSelector(state => state.transactionNFT)
    const { stakingNftNumber } = useSelector(state => state.stakingView)

    console.log("판매중인 Id 확인", sellingNftId)
    console.log("나의 민팅데이터",mymintdata)
    console.log("스테이킹 NFT",stakingNftNumber)

    const revmymintdata = [...mymintdata].reverse() 

    const moveSellPage = (index) => {
        navigate(`/sellpage/${index}`)
    }

  useEffect(()=> {
    dispatch(mypageAction.mypageAct(account))
    dispatch(marketAction.marketAct())
    dispatch(stakingViewAction.stakingViewAct(account))
  },[account])

  return (
    <div className='myCardListContainer'>
        { revmymintdata !== "" && sellingNftId !== '' && stakingNftNumber !== '' ? 
        revmymintdata.map((item, index)=>(
        <div className='cardListContainer' key={index} onClick={()=>moveSellPage(item.data.edition)}>
            <div className='myNftCard'
             style={{
                backgroundImage: 
                    "url(" + 
                    `${item.data.image}` + 
                    ")"
            }}
            >
            </div>
            <div className='cardtxtContainer'>
                <div className='cardtxt'>
                    <div className='cardlisttitle'>
                        <p>Zolaman nft</p> 

                    </div>
                    <div className='cardlistname'>
                        <p>{item.data.name}</p>
                    </div>
                </div>
                {
                    sellingNftId.includes(item.data.edition) 
                    ?
                    (
                        stakingNftNumber.includes(item.data.edition) 
                        ?    
                        <div className='cardtxtButton'>
                            <div className='cardlisttitleButton'>
                                Staking
                            </div>
                        </div>
                        : 
                        <div className='cardtxtButton'>
                            <div className='cardlisttitleButton'>
                                Sale
                            </div>
                        </div>
                    ) 
                    :
                    (
                        stakingNftNumber.includes(item.data.edition) 
                        ?    
                        <div className='cardtxtButton'>
                            <div className='cardlisttitleButton'>
                                Staking
                            </div>
                        </div>
                        : 
                        <div className='cardtxtButton'>
                            <div className='cardlisttitleButton'>
                                Available for Sale
                            </div>
                        </div>
                    )                   
                }
            </div>
        </div>
        )): null} 
    </div>
  )
}

export default MyCardList