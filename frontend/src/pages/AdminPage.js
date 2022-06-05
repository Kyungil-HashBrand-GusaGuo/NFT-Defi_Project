import React from 'react'
import './AdminPage.css'
import { useSelector } from 'react-redux';
//import { FaSearch } from "react-icons/fa";
import { BsJournalPlus } from "react-icons/bs";

const AdminPage = () => {

  //const {account} = useSelector(state => state.account)

  return (
    <div className='adminContainer'>
        {/* onSubmit */}
        {/* <div>{account}</div> */}
        <form>
            <input type="text" className='adminInput' placeholder='Add WhiteList' />
            <button className='adminButton'><BsJournalPlus/></button>
            {/* <input type="submit" className='adminButton' value='+'/> */}
        </form>
    </div>
  )
}

export default AdminPage