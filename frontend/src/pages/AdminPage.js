import React, { useState } from 'react'
import './AdminPage.css'
import { useDispatch, useSelector } from 'react-redux';
import { BsJournalPlus } from "react-icons/bs";
import { addWhiteListAccount } from '../redux/actions/addWhiteListAccount';

const AdminPage = () => {
  const dispatch = useDispatch();
  const {account} = useSelector(state => state.account);
  const [address, setAddress] = useState();

  const addWhiteList = async() => {
    await dispatch(addWhiteListAccount.addWhiteList(account, address))
  }

  const changeAddress = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  }

  return (
    <div className='adminContainer'>
        <div className='adminSection'>
          <form onSubmit={addWhiteList}>
              <input type="text" className='adminInput' placeholder='Add WhiteList' onChange={changeAddress} />
              <button type="submit" className='adminButton'><BsJournalPlus/></button>
          </form>
        </div>
        <div className='adminSection'>
          <form onSubmit={addWhiteList}>
              <input type="text" className='adminInput' placeholder='Delete WhiteList' onChange={changeAddress} />
              <button type="submit" className='adminButton'><BsJournalPlus/></button>
          </form>
        </div>
    </div>
  )
}

export default AdminPage