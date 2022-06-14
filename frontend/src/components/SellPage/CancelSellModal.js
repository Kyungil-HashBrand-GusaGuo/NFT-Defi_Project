import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cancelSellingAction } from '../../redux/actions/cancelSellingAction'
import { useNavigate } from 'react-router-dom'

const CancelSellModal = ({edition, account}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { sellingNftCancel } = useSelector(state => state.transactionNFT)
    console.log("Cancel 모달창에서 확인",sellingNftCancel)

    const goToMypage = () => {
      navigate('/mypage')
    }

    useEffect( () => {
        dispatch(cancelSellingAction.cancelSellAction(edition,account))
    },[])

  return (
    <div className='overlay'>
        CancelSellModal
        {
          sellingNftCancel ? <button onClick={goToMypage}>Go to Mypage</button> : null
        }
    </div>
  )
}

export default CancelSellModal