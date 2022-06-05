import React, { useState } from 'react'
import './AdminPage.css'
import { useDispatch, useSelector } from 'react-redux';
import { BsJournalPlus } from "react-icons/bs";
import { addWhiteListAccount } from '../redux/action/addWhiteListAccount';

const AdminPage = () => {
  const dispatch = useDispatch();
  const {account} = useSelector(state => state.account);
  const [address, setAddress] = useState();



  const addWhiteList = () => {
    dispatch(addWhiteListAccount.addWhiteList(account,address))
  }

  const changeAddress = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  }

  return (
    <div className='adminContainer'>
            <input type="text" className='adminInput' placeholder='Add WhiteList' onChange={changeAddress} />
            <button type="submit" className='adminButton' onClick={addWhiteList}><BsJournalPlus/></button>
    </div>
    
  )
}

export default AdminPage