import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sellingAction } from '../../redux/actions/sellingAction'
import { useNavigate } from 'react-router-dom'
import "./SellModal.css"

const SellModal = ({edition, account, price}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { sellingNftSuccess } = useSelector(state => state.transactionNFT)
    // console.log("숫자",price)

    const goToMarket = () => {
      navigate('/market')
    }

    useEffect( () => {
        dispatch(sellingAction.sellAction(edition,account,price))
    },[])

  return (
    <div className='overlay'>
        <div className='sellModalContainer'>
          <div className='sellMintingInfoSection'>  
            { sellingNftSuccess ?
            <div>
              <h2 className='sellMintingComMessage'>Sell Success!!!</h2>
              <button className='sellModalEndButton' onClick={goToMarket}>Go to Market</button> 
            </div>
            : <h2 className='sellMintingMessage'> Sell Loading...</h2> }
          </div>
      </div>
    </div>
  )
}

export default SellModal