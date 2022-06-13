import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { sellingAction } from '../../redux/actions/sellingAction'
import { setDataContract } from '../../caverConfig'

const SellModal = ({edition, account}) => {
    // console.log(edition)
    // console.log(account)
    const dispatch = useDispatch()

    // const testFunc = async() => {
    //     const res = await setDataContract.methods.gettypeToId(167).call()
    //     console.log(res)
    // } 

    useEffect( () => {
        dispatch(sellingAction.sellAction(edition,account))
        //testFunc()
    },[])

  return (
    <div className='overlay'>
        SellModal


    </div>
  )
}

export default SellModal