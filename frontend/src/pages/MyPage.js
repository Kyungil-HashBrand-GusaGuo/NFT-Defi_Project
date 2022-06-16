import React from 'react'
import './MyPage.css'
import { MyCardList } from '../components';

const MyPage = () => {


  return (
    <>
      <div className='collectionTitleContainer'>
              <h2>MyPage</h2>
      </div>
      <div className="style-five"></div>
      <hr className="style-five"/> 
      <div className='myPageContainer'>
          <MyCardList/>
      </div>
    </>
  )
}

export default MyPage