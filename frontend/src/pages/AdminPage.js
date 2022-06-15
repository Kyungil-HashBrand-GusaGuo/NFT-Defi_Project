import React, { useState } from 'react'
import './AdminPage.css'
import { useDispatch, useSelector } from 'react-redux';
import { FiUserPlus, FiUserMinus } from "react-icons/fi";
import { addWhiteListAccount } from '../redux/actions/addWhiteListAccount';
import { deleteWhiteListAccount } from '../redux/actions/deleteWhiteListAccount';
import { startStakingAction } from '../redux/actions/startStakingAction';

const AdminPage = () => {
  const dispatch = useDispatch();
  const {account} = useSelector(state => state.account);
  const [address, setAddress] = useState();
  
  const addWhiteList = () => {
    dispatch(addWhiteListAccount.addWhiteList(account, address))
  }

  const deleteWhiteList = () => {
    dispatch(deleteWhiteListAccount.deleteWhiteList(account, address))
  }

  const startStaking = () => {
    dispatch(startStakingAction.startStakingAct(account))
  }

  const changeAddress = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
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
              {/* <input type="text" className='adminInput' placeholder='Delete WhiteList' onChange={changeAddress} /> */}
              <button type="submit" className='stakingButton' onClick={startStaking}>START STAKING</button>
        </div>
    </div>
  )
}

export default AdminPage