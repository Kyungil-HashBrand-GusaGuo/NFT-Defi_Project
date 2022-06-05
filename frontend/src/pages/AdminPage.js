import React from 'react'
import './AdminPage.css'
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';

const AdminPage = () => {

  //const {account} = useSelector(state => state.account)

  return (
    <div className='adminContainer'>
        {/* onSubmit */}
        {/* <div>{account}</div> */}
        <form>
            <input className='adminInput' />
            {/* <button className='adminButton'>asdfasdf</button> */}
            <input className='adminButton'/>
        </form>
    </div>
  )
}

export default AdminPage