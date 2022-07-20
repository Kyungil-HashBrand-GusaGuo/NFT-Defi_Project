import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cancelSellingAction } from '../../redux/actions/cancelSellingAction'
import { useNavigate } from 'react-router-dom'

const CancelSellModal = ({edition, account}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { sellingNftCancel } = useSelector(state => state.transactionNFT)
    // console.log("Cancel 모달창에서 확인",sellingNftCancel)

    const goToMypage = () => {
      navigate('/mypage')
    }

    useEffect( () => {
        dispatch(cancelSellingAction.cancelSellAction(edition,account))
    },[])

  return (
    <div className='overlay'>
      <div className='sellModalContainer'>
        <div className='sellMintingInfoSection'>  
            {/* <h2 className='sellMintingMessage'>Cancel Sell Loading...</h2> */}
            { sellingNftCancel ? 
            <div>
              <h2 className='sellMintingCancelMessage'>Cansel Sell Success!!!</h2>
              <button className='sellModalEndButton' onClick={goToMypage}>Go to Mypage</button> 
            </div>
            : <h2 className='sellMintingMessage'>Cancel Sell Loading...</h2> }
        </div>
      </div>
    </div>
  )
}

export default CancelSellModal