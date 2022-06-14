import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./MarketPage.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { marketAction } from '../redux/actions/marketAction';

const MarketPage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  //const [marketArray, setMarketArray] = useState('')

  const { sellingAllNftData } = useSelector(state => state.transactionNFT)
  console.log(sellingAllNftData)
  // const callSellNft = async() => {
  //   const response = await axios.get("http://34.64.61.199:9495/block/getOnSaleJolaman");
  //   // console.log("판매중NFT", response.data)
  //   // console.log("NFT번호", response.data[0])
  //   // console.log("NFT가격", response.data[1])
 
  //   const idArr = response.data[0];
  //   const priceArr = response.data[1];

  //   let sellNftArr = [] 

  //   for(let i=0; i < idArr.length; i++){
  //     let data = { id : idArr[i], price : priceArr[i]}
  //     sellNftArr.push(data)
  //   }
  //   setMarketArray(sellNftArr)
  // }
  
  const moveBuyPage = (index) => {
    navigate(`/marketpage/${index}`)
  }

  useEffect(()=>{
    dispatch(marketAction.marketAct())
    //callSellNft()
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