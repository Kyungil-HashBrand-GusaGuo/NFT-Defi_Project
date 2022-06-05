import React, { useEffect } from 'react';
import './MyCardList.css';
import { Test } from '../../images'
import { useDispatch, useSelector } from 'react-redux';
import { test } from '../../redux/action/test';

const MyCardList = () => {

    const dispatch = useDispatch();
    const { account } = useSelector(state => state.account)

    console.log("여기", account)


    useEffect( () => {
        dispatch(test.testMy(account))
    })


  return (
    <div className='cardListContainer'>
        <div className='myNftCard'>
            <img src={Test}></img>
        </div> 
        <div className='cardlisttxt'>
            <div className='cardlisttitle'>
                <p>Zolaman nft</p>
                <p>Zolaman nft #1234</p>
            </div>
            <div className='cardlistprice'>
                <p>$1234</p>
                <p>price</p>
            </div>
        </div> 
        {/* <div className='cardlisttxt2'>
            <div className='cardlistprice'>
                <b>$1234</b>
            </div>
            <div className='cardlisttxtprice'>
                <b>price</b>
            </div>
        </div> */}
    </div>
    
  )
}

export default MyCardList