import React from 'react'
import {AllCardList} from '../components'
import './AllMintPage.css';

const AllMintPage = () => {


  return (
    <>
      <div className='collectionTitleContainer'>
              <h2>Collection</h2>
      </div>
      <div className="style-five"></div>
      <hr className="style-five"/> 
      <div className='AllMintPageContainer'>
          <AllCardList/>
      </div>
    </>
  )
}

export default AllMintPage