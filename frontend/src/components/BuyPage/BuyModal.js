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
        <div>BuyModal</div>
        <div>{edition}</div>
        {
          buyingNftSuccess ? <button onClick={goToMypage}>Go to Mypage</button> : null
        }
    </div>
  )
}

export default BuyModal