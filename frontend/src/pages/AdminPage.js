import React, { useState } from 'react'
import './AdminPage.css'
import { useDispatch, useSelector } from 'react-redux';
import { FiUserPlus, FiUserMinus } from "react-icons/fi";
import { addWhiteListAccount } from '../redux/actions/addWhiteListAccount';
import { deleteWhiteListAccount } from '../redux/actions/deleteWhiteListAccount';

const AdminPage = () => {
  const dispatch = useDispatch();
  const {account} = useSelector(state => state.account);
  const [address, setAddress] = useState();



  const changeAddress = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  }

  return (
    
  )
}

export default AdminPage