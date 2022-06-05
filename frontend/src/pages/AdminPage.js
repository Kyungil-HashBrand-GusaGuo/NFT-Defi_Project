import React, { useState, useEffect } from 'react'
import './AdminPage.css'
import { useDispatch, useSelector } from 'react-redux';
import { BsJournalPlus } from "react-icons/bs";
import { addWhiteListAccount } from '../redux/actions/addWhiteListAccount';

const AdminPage = () => {
  const dispatch = useDispatch();
  const {account} = useSelector(state => state.account);
  const [address, setAddress] = useState();
  

  // let account = "0xaC0d580B21118dB9Ea5d752d8950e9C2436575DE";
  // let testAccount = "0xaC0d580B21118dB9Ea5d752d8950e9C2436575DE";


  const addWhiteList = () => {
    dispatch(addWhiteListAccount.addWhiteList(account, address))
  }

  // const onClickaddWhiteList = () => {
  //   try {
  //     const response =  caver.klay.sendTransaction({
  //       from: account,
  //       to: MINT_CONTRACT_ADDRESS,
  //       gas: "3000000",
  //       data: RandomJolamanContract.methods.addWhiteList(testAccount).encodeABI(),
  //     });
  //     console.log(response)
  //   } catch(error) {
  //     console.error(error);
  //   }
  // }

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