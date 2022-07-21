import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { buyingAction } from '../../redux/actions/buyingAction'

const BuyModal = ({edition, account}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {buyingNftSuccess} = useSelector(state => state.transactionNFT)

    const goToMypage = () => {
      navigate('/mypage')
    }

    useEffect( () => {
        dispatch(buyingAction.buyAction(edition, account))
    },[])

  return (
      <div className='overlay'>
          <div className='sellModalContainer'>
            <div className='sellMintingInfoSection'>  
                { buyingNftSuccess ? 
                <div>
                  <h2 className='sellMintingComMessage'>Buy Success!!!</h2>
                  <button className='sellModalEndButton' onClick={goToMypage}>Go to MyPage</button> 
                </div>
                : <h2 className='sellMintingMessage'> Buy Loading...</h2> }
                {/* <button className='sellModalEndButton' onClick={goToMypage}>Go to Mypage</button> : null } */}
            </div>
          </div>
      </div>
  )
}

export default BuyModal