import React, { useState } from 'react'
import './AdminPage.css'
import { useDispatch, useSelector } from 'react-redux';
import { BsJournalPlus } from "react-icons/bs";
import { addWhiteListAccount } from '../redux/actiion/addWhiteListAccount';

const AdminPage = () => {
  const dispatch = useDispatch();
  const {account} = useSelector(state => state.account);
  const [address, setAddress] = useState();

  const addWhiteList = () => {
    dispatch(addWhiteListAccount.addWhiteList(account, address))
  }

  const changeAddress = (e) => {
    setAddress(e.target.value);
  }

  return (
    <div className='adminContainer'>
        {/* onSubmit */}
        {/* <div>{account}</div> */}
        <form onSubmit={addWhiteList}>
            <input type="text" className='adminInput' placeholder='Add WhiteList' onChange={changeAddress} />
            <button type="submit" className='adminButton'><BsJournalPlus/></button>
            {/* <input type="submit" className='adminButton' value='+'/> */}
        </form>
    </div>
  )
}

export default AdminPage