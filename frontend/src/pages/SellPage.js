import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { SellModal, CancelSellModal } from '../components';
import { cancelSellingAction } from '../redux/actions/cancelSellingAction';
import axios from 'axios';
//import {caver, SaleContract, SALE_CONTRACT_ADDRESS} from '../caverConfig'



const SellPage = () => {

    const dispatch = useDispatch();
    let {edition} = useParams()
    //console.log(edition)
    const { account } = useSelector(state => state.account)
    //const { sellingNftSuccess } = useSelector(state => state.transactionNFT)
    //console.log( "NFT판매여부", sellingNftSuccess)
    const [sellModal, setSellModal] = useState(false)
    const [cancelSellModal, setCancelSellModal] = useState(false)
    const [checkSell, setCheckSell] = useState()

    const changeSellModalState = () => {
      setSellModal(true)
    }
    const changeCancelSellModalState = () => {
      setCancelSellModal(true)
    }

    const callSellNft = async() => {
      const response = await axios.get("http://34.64.61.199:9495/block/getOnSaleJolaman");
      let state = response.data[0].includes(edition)
      console.log("배열확인", response.data[0])
      console.log("배열확인", state)
      setCheckSell(state)
    }
    
    useEffect(()=>{
      callSellNft()
    },[])

  return (
    <>
    <div>SellPage</div>
    <div>SellPage</div>
    <div>SellPage</div>
    <div>SellPage</div>
    <div>SellPage</div>
    {
      sellModal ? <SellModal edition={edition} account={account}/> : null
    }
    {
      cancelSellModal ? <CancelSellModal edition={edition} account={account}/> : null
    }
    <div>SellPage</div>
    <div>SellPage</div>
    <div>SellPage{account}</div>
    <div>SellPage{edition}</div>
    {
      checkSell ? <button onClick={changeCancelSellModalState}>Cancel Sell</button> : <button onClick={changeSellModalState}>Sell</button>

    }
    </>
  )
}

export default SellPage