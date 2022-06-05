import React from 'react'
import { MyCardList } from '../components'
import './MyPage.css'
import { useDispatch } from 'react-redux';

const MyPage = () => {
  // const dispatch = useDispatch()

  return (
    <div className='myPageContainer'>
        <MyCardList/>
        {/* <MyCardList/>
        <MyCardList/>
        <MyCardList/> */}
    </div>
  )
}

export default MyPage