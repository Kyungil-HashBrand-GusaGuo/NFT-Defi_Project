import React from 'react'
import AllCardList from '../components/AllMintPage/AllCardList';
import './AllMintPage.css';
import axios from "axios";

const AllMintPage = () => {


  return (
    <div className='AllMintPageContainer'>
        <AllCardList/>
    </div>
  )
}

export default AllMintPage