import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sellingAction } from '../../redux/actions/sellingAction'
import { useNavigate } from 'react-router-dom'

const SellModal = ({edition, account, price}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { sellingNftSuccess } = useSelector(state => state.transactionNFT)
    console.log("숫자",price)

    const goToMarket = () => {
      navigate('/market')
    }

    useEffect( () => {
        dispatch(sellingAction.sellAction(edition,account,price))
    },[])

  return (
    <div className='overlay'>
        SellModal
        {
          sellingNftSuccess ? <button onClick={goToMarket}>Go to Market</button> : null
        }
    </div>
  )
}

export default SellModal