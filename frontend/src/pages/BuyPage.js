import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './BuyPage.css'
import { BuyModal } from '../components';

const BuyPage = () => {

    let {edition} = useParams()
    const [sellNftPrice, setSellNftPrice] = useState()
    const [buyModal, setBuyModal] = useState(false)
    const { account } = useSelector(state => state.account)
    const { sellingAllNftData } = useSelector(state => state.transactionNFT)
    
    const checkSellNftPrice = () => {
        //console.log(sellingAllNftData)
        for(let i=0; i < sellingAllNftData.length; i++){
            if(sellingAllNftData[i].id == edition){
                setSellNftPrice(sellingAllNftData[i].price)
            }
        }
    }

    const changeBuyModalState = () => {
        setBuyModal(true)
      }

    useEffect (() => {
        checkSellNftPrice()
    },[])

  return (
    <div className='BuyPageContainer'>
        <div>BuyPage</div>
        <div>BuyPage</div>
        <div>number : {edition}</div>
        <div>price : {sellNftPrice}</div>
        <button onClick={changeBuyModalState} >Buy NFT</button>
        <div>
        {
            buyModal ? <BuyModal edition={edition} account={account} /> : null
        }
        </div>
        <div>BuyPage</div>
        <div>BuyPage</div>

    </div>
  )
}

export default BuyPage