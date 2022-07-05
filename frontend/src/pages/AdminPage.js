import React, { useState } from 'react'
import './AdminPage.css'
import { useDispatch, useSelector } from 'react-redux';
import { FiUserPlus, FiUserMinus } from "react-icons/fi";
import { addWhiteListAccount } from '../redux/actions/addWhiteListAccount';
import { deleteWhiteListAccount } from '../redux/actions/deleteWhiteListAccount';
import { AirdropModal } from '../components/index'

const AdminPage = () => {
  const dispatch = useDispatch();
  const {account} = useSelector(state => state.account);
  const [address, setAddress] = useState();
  const [swapModal, setSwapModal] = useState(false);

  const addWhiteList = () => {
    dispatch(addWhiteListAccount.addWhiteList(account, address))
  }

  const deleteWhiteList = () => {
    dispatch(deleteWhiteListAccount.deleteWhiteList(account, address))
  }

  const changeAddress = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  }

  const changeSwapModal = () => {
    setSwapModal(true)
  }

  return (
    <>
      { swapModal ? <AirdropModal setSwapModal={setSwapModal}/> : null}
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
                <button className='adminModalButton' onClick={changeSwapModal}>Select AirDrop NFT</button>
          </div>
      </div>
    </>
  )
}

export default AdminPage