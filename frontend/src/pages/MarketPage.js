import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./MarketPage.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { marketAction } from '../redux/actions/marketAction';
import Dropdown from '../components/MarketPage/DropDown';

const MarketPage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

  const { sellingAllNftData } = useSelector(state => state.transactionNFT)
  console.log(sellingAllNftData)

  
  const moveBuyPage = (index) => {
    navigate(`/marketpage/${index}`)
  }

  useEffect(()=>{
    dispatch(marketAction.marketAct())
  },[])

  // {
  //   sellingAllNftData !== '' ? 
  //   sellingAllNftData.map((item, index) => {
  //     return <div className='testMarketBox' key={index} onClick={() => moveBuyPage(item.id)}>
  //       <h2>{item.id}</h2>
  //       <h2>{item.price}</h2>
  //     </div>
  //   })
  //   : null
  // }

  return (
    <>
      <div className='marketTitleContainer'>
                <h2>ZOLAMAN Market</h2>
      </div>
      <div class="style-five"></div>
      <hr class="style-five"/> 
      <div className='mainMarketContainer'>
        <div className='leftMarketContainer'>
          <div className='leftMarketSection'>

          </div>
          
        </div>
        <div className='rightMarketContainer'>
          <div className=' rightMarketSection'>
            <div className='rightMarketTitle'>
              <span>Filter</span>
              <button onClick={e => setDropdownVisibility(!dropdownVisibility)}>
                {
                    dropdownVisibility
                        ? 'Close'
                        : 'Open'
                }
              </button>
              <Dropdown visibility={dropdownVisibility}>
                  <ul>
                      <li>background</li>
                      <li>cloak</li>
                      <li>eyes</li>
                      <li>clothes</li>
                      <li>weapon</li>
                  </ul>
              </Dropdown>
            </div>
            <div className='rightMarketCardContainer'>                
                <div className='rightMarketCardList'>
                  <div className='rightMarketNftCard'
                  //   style={{
                  //     backgroundImage: 
                  //         "url(" + 
                  //         `${showMint.image}` + 
                  //         ")"
                  // }}
                  >
                  </div>
                  <div className='rightMarketCardTxtContainer'>
                    <div className='rightMarketCardTxtSection'>
                      <div className='rightMarketCardDnaTxt'>
                        <span className='rightMarketCardDnaTxt1'>Create By </span>
                        <span className='rightMarketCardDnaTxt2'> GusaGuO</span>
                      </div>
                      <div className='rightMarketCardNum'>
                        <span>NO.1234</span>
                      </div>
                    </div>    
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MarketPage