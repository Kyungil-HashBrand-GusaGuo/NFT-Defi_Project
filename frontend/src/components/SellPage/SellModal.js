import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sellingAction } from '../../redux/actions/sellingAction'
import { setDataContract } from '../../caverConfig'
import { useNavigate } from 'react-router-dom'

const SellModal = ({edition, account}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { sellingNftSuccess } = useSelector(state => state.transactionNFT)
    console.log("모달창에서 확인",sellingNftSuccess)

    const goToMypage = () => {
      navigate('/mypage')
    }

    useEffect( () => {
        dispatch(sellingAction.sellAction(edition,account))
    },[])

  return (
    <div className='overlay'>
        SellModal
        {
          sellingNftSuccess ? <button onClick={goToMypage}>Go to Mypage</button> : null
        }
    </div>
  )
}

export default SellModal