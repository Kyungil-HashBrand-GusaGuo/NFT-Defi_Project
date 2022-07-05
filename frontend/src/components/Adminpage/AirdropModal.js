import React, { useEffect, useState } from 'react'
import "./AirdropModal.css"
import { CgCloseO } from "react-icons/cg";
import { TbArrowBigLeftLines, TbArrowBigRightLines } from "react-icons/tb";
import Slider from "react-slick";
import MagicSliderDots from 'react-magic-slider-dots';
import { useDispatch, useSelector } from 'react-redux';
import { stakingViewAction } from '../../redux/actions/stakingViewAction';
import { airdropAction } from '../../redux/actions/airdropAction';

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

  const {account} = useSelector(state => state.account)
  const {myNftList} = useSelector(state => state.stakingView)
  const [test, setTest] = useState()

  const closePage = () => {
    setSwapModal(false)
  }

  let seletedArr = []

  const selectNft = (item) => {
    if(seletedArr.length < 3){
      seletedArr.push(item)
      console.log(seletedArr)
    } else {
      alert("모두 선택되었습니다")
    }
  }

  const airdrop = (arr) => {
    dispatch(airdropAction.airdropAct(arr))
  }

  useEffect( () => {
    dispatch(stakingViewAction.stakingViewAct(account))
  },[account])

  return (
    <div className='overlay'>
      <div className='airdropModalContainer'>
        <div className='airdropModalSection'>
          <div className='airdropModalTitle'>
            <h1>Select AirDrop NFT</h1>
            <h1 onClick={closePage}><CgCloseO/></h1>
          </div>
          <div className='airdropModalSliderSection'>
              {
                myNftList !== '' ?
                <Slider className='airdropSlider' {...settings} >
                {
                  myNftList.map((item, index)=> {
                  return<div className='nftListContainer'  key={index}>
                    
                      <div className='nftListCard' onClick={()=>selectNft(item)}
                        style={{
                          backgroundImage: 
                            "url(https://sean95.s3.ap-northeast-2.amazonaws.com/raw/" + 
                            `${item}` + 
                            ".png)"
                        }}>
                      </div>
                    </div>
                  })
                }
                  </Slider>
                    : null
              }  
          </div>
          <div className='airdropModalSelectSection'>
            <div>Selected : {test} / {seletedArr[1]} / {seletedArr[2]}</div>
          </div>
          <div className='airdropModalButtonSection'>
            <button className='airdropModalButton' onClick={()=>airdrop(seletedArr)}>Select NFT</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AirdropModal