import React from 'react'
import './MyPage.css'
import { MyCardList } from '../components';
import { useSelector } from 'react-redux';

const MyPage = () => {
  const { account } = useSelector((state) => state.account);


  return (
    <div className='myPageContainer'>
        <MyCardList/>
    </div>
  );
};

export default MyPage;
