import React, { useEffect, useState } from 'react'
import './SelectGameNftModal.css'
import { CgCloseO } from "react-icons/cg";
import { TbArrowBigLeftLines, TbArrowBigRightLines } from "react-icons/tb";
import Slider from "react-slick";
import MagicSliderDots from 'react-magic-slider-dots';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { stakingViewAction } from '../../redux/actions/stakingViewAction';
import Swal from 'sweetalert2'






const SelectGameNftModal = ({setSwapModal}) => {

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

      const closePage = () => {
        setSwapModal(false)
      }

      let seletedGameArr = []

      const selectGameNft = (item) => {
        if(seletedGameArr < 2){
            seletedGameArr.push(item)
          // console.log(seletedGameArr)
          // console.log("계정주소",account);
          if(seletedGameArr.length == 1){
            // alert("Nft가 선택되었습니다!")
            Swal.fire({
              title: 'Success!',
              text: 'Nft가 선택되었습니다!',
              icon: 'success',
              confirmButtonText: 'OK'
          })
          }
        } else {
          // alert("하나만 선택할 수 있습니다.")
          Swal.fire({
            title: 'Error!',
            text: '하나만 선택할 수 있습니다.',
            icon: 'error',
            confirmButtonText: 'Back'
        })
        }
      }
      const checkingNft = (e) => {
        if(e.checked){
          e.checked = false
        } else {
          e.checked = true;
        }
      }

      const goToBlackJackGame = (seletedGameArr) => {
        if(seletedGameArr.length == 0) {
          // alert("NFT를 선택해주세요")
          Swal.fire({
            title: 'Warning!',
            text: 'NFT를 선택해주세요',
            icon: 'warning',
            confirmButtonText: 'Back'
        })
        } else {
          navigate('/blackjackgame', {state : seletedGameArr})
        }
      }

      useEffect(()=> {
        dispatch(stakingViewAction.stakingViewAct(account))
      },[account])


  return (
    <div className='selectGameNftoverlay'>
      <div className='selectGameNftModalContainer'>
        <div className='selectGameNftModalSection'>
          <div className='selectGameNftModalTitle'>
            <h2>Select NFT</h2>
            <h1 onClick={closePage}><CgCloseO/></h1>
          </div>
          <div className='selectGameNftModalSliderSection'>
              {
                myNftList !== '' ?
                <Slider className='selectGameNftSlider' {...settings} >
                {
                  myNftList.map((item, index)=> {
                  return<div className='gameNftListContainer'  key={index}>
                    
                      <div className='gameNftListCard' 
                        style={{
                          backgroundImage: 
                            "url(https://sean95.s3.ap-northeast-2.amazonaws.com/raw/Zolaman/" + 
                            `${item}` + 
                            ".png)"
                        }}>
                        <input type='checkbox' className='gameNftCheckBox' />
                        <label className='gameNftCheckBoxCircle' onClick={(e)=>{selectGameNft(item); checkingNft(e.target.parentNode.children[0]);}}></label>
                      </div>
                    </div>
                  })
                }
                  </Slider>
                    : null
              }  
          </div>
          <div className='selectGameNftModalButtonSection'>
                <button className='selectGameNftModalButton' onClick={()=>goToBlackJackGame(seletedGameArr)}>Start</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectGameNftModal