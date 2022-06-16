import React, { useState } from 'react'
import './AdminPage.css'
import { useDispatch, useSelector } from 'react-redux';
import { FiUserPlus, FiUserMinus } from "react-icons/fi";
import { addWhiteListAccount } from '../redux/actions/addWhiteListAccount';
import { deleteWhiteListAccount } from '../redux/actions/deleteWhiteListAccount';
import { changeMintPrice } from '../redux/actions/changeMintPrice';

const AdminPage = () => {
  const dispatch = useDispatch();
  const {account} = useSelector(state => state.account);
  const [address, setAddress] = useState();
  const [price, setPrice] = useState();
  
  const addWhiteList = () => {
    dispatch(addWhiteListAccount.addWhiteList(account, address))
  }

  const deleteWhiteList = () => {
    dispatch(deleteWhiteListAccount.deleteWhiteList(account, address))
  }
  const changingPrice = () => {
    dispatch(changeMintPrice.changePrice(account, price))
  }

  const changeAddress = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  }
  const changePrice = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  }

  return (
    <div className='adminContainer'>
        <div className='adminSection'>
              <input type="text" className='adminInput' placeholder='Add WhiteList' onChange={changeAddress} />
              <button type="submit" className='adminButton' onClick={addWhiteList}><FiUserPlus/></button>
        </div>
        <div className='adminSection'>
              <input type="text" className='adminInput' placeholder='Delete WhiteList' onChange={changeAddress} />
              <button type="submit" className='adminButton' onClick={deleteWhiteList}><FiUserMinus/></button>
        </div>
        <div className='adminSection'>
              <input type="text" className='adminInput' placeholder='Change Price' onChange={changePrice} />
              <button type="submit" className='adminButton' onClick={changingPrice}>변경</button>
        </div>
    </div>
  )
}

export default AdminPage