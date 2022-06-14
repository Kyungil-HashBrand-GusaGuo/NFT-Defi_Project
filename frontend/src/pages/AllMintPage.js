import React from 'react'
import {AllCardList} from '../components'
import './AllMintPage.css';

const AllMintPage = () => {


  return (
    <>
      <div className='collectionTitleContainer'>
              <h2>Collection</h2>
      </div>
      <div class="style-five"></div>
      <hr class="style-five"/> 
      <div className='AllMintPageContainer'>
          <AllCardList/>
      </div>
    </>
  )
}

export default AllMintPage