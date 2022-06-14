import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./MarketPage.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { marketAction } from '../redux/actions/marketAction';

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
    <div className='MarketPageContainer'>
      <div>SalePage</div>
      <div>SalePage</div>
      <div>SalePage</div>
      <div>SalePage</div>
      <div>SalePage</div>
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
    </div>
  )
}

export default MarketPage