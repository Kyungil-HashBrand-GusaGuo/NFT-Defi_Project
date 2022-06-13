import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { buyingAction } from '../../redux/actions/buyingAction'

const BuyModal = ({edition, account}) => {

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(buyingAction.buyAction(edition, account))
    },[])

  return (
    <div className='overlay'>
        <div>BuyModal</div>
        <div>{edition}</div>
        {/* <div>{account}</div> */}
    </div>
  )
}

export default BuyModal