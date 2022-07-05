import React, { useEffect, useState } from 'react'
import "./AirdropModal.css"
import { CgCloseO } from "react-icons/cg";
import { TbArrowBigLeftLines, TbArrowBigRightLines } from "react-icons/tb";
import Slider from "react-slick";
import MagicSliderDots from 'react-magic-slider-dots';
import { useDispatch, useSelector } from 'react-redux';
import { stakingViewAction } from '../../redux/actions/stakingViewAction';
import { rewardEditionSetAction } from '../../redux/actions/rewardEditionSetAction';
import { useNavigate } from 'react-router-dom';

const AirdropModal = ({setSwapModal}) => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <TbArrowBigRightLines color='black' className='nextArrowBtn' />,
    prevArrow: <TbArrowBigLeftLines color='black'  className='preArrowBtn'/>,
    appendDots: dots => {
      return <MagicSliderDots dots={dots} numDotsToShow={5} dotWidth={30} />;
    }
  };

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {account} = useSelector(state => state.account)
  const {myNftList} = useSelector(state => state.stakingView)
  const {setAirdropRewardSuccess} = useSelector(state => state.game)

  const closePage = () => {
    setSwapModal(false)
  }

  let seletedArr = []

  const selectNft = (item) => {
    if(seletedArr.length < 3){
      seletedArr.push(item)
      console.log(seletedArr)
      if(seletedArr.length == 3){
        alert("모두 선택되었습니다!")
      }
    } else {
      alert("더이상 선택할 수 없습니다!")
    }
  }

  const checkingNft = (e) => {
    if(e.checked){
      e.checked = false
    } else {
      e.checked = true;
    }
  } 

  const airdrop = (arr) => {
    dispatch(rewardEditionSetAction.rewardEditionSetAct(arr))
  }

  const toGamePage = () => {
    navigate('/gamemain')
  }

  useEffect( () => {
    dispatch(stakingViewAction.stakingViewAct(account))
    if(setAirdropRewardSuccess){
      alert("NFT 선택 완료!")
    }
  },[account, setAirdropRewardSuccess])

  return (
    <div className='overlay'>
      <div className='airdropModalContainer'>
        <div className='airdropModalSection'>
          <div className='airdropModalTitle'>
            <h2>Select AirDrop NFT</h2>
            <h1 onClick={closePage}><CgCloseO/></h1>
          </div>
          <div className='airdropModalSliderSection'>
              {
                myNftList !== '' ?
                <Slider className='airdropSlider' {...settings} >
                {
                  myNftList.map((item, index)=> {
                  return<div className='nftListContainer'  key={index}>
                    
                      <div className='nftListCard' 
                        style={{
                          backgroundImage: 
                            "url(https://sean95.s3.ap-northeast-2.amazonaws.com/raw/" + 
                            `${item}` + 
                            ".png)"
                        }}>
                        <input type='checkbox' className='nftCheckBox' />
                        <label className='nftCheckBoxCircle' onClick={(e)=>{selectNft(item); checkingNft(e.target.parentNode.children[0]);}}></label>
                      </div>
                    </div>
                  })
                }
                  </Slider>
                    : null
              }  
          </div>
          <div className='airdropModalButtonSection'>
            {
              setAirdropRewardSuccess ?
              <button className='airdropModalButton' onClick={()=>toGamePage()}>Go to GamePage</button>  
              : <button className='airdropModalButton' onClick={()=>airdrop(seletedArr)}>Select NFT</button>
            }
        
          </div>
        </div>
      </div>
    </div>
  )
}
export default AirdropModal