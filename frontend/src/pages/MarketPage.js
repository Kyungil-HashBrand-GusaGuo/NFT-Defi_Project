import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./MarketPage.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { marketAction } from '../redux/actions/marketAction';
import { Dropdown, DropdownButton } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

const MarketPage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { sellingAllNftData } = useSelector(state => state.transactionNFT)
  console.log(sellingAllNftData)

  
  const moveBuyPage = (index) => {
    navigate(`/marketpage/${index}`)
  }

  useEffect(()=>{
    dispatch(marketAction.marketAct())
  },[])

  return (
    <>
      <div className='marketTitleContainer'>
                <h2>Market</h2>
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
              <p>Filter</p>
              <DropdownButton id="dropdown-basic-button" title="Sort by">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>

            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
      {/* <div className='MarketPageContainer'>
        <div>
        {
          sellingAllNftData !== '' ? 
          sellingAllNftData.map((item, index) => {
            return <div className='testMarketBox' key={index} onClick={() => moveBuyPage(item.id)}>
              <h2>{item.id}</h2>
              <h2>{item.price}</h2>
            </div>
          })
          : null
        }
        </div>

        <div>SalePage</div>
        <div>SalePage</div>
      </div> */}
    </>
  )
}

export default MarketPage