import React from 'react'
import './MyPage.css'
import { MyCardList } from '../components';

const MyPage = () => {


  return (
    <>
      <div className='collectionTitleContainer'>
              <h2>MyPage</h2>
      </div>
      <div class="style-five"></div>
      <hr class="style-five"/> 
      <div className='myPageContainer'>
          <MyCardList/>
      </div>
    </>
  )
}

export default MyPage