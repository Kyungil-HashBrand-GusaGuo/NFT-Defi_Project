import React from 'react'
import './AdminPage.css'
//import { FaSearch } from "react-icons/fa";
import { BsJournalPlus } from "react-icons/bs";

const AdminPage = () => {
  return (
    <div className='adminContainer'>
        {/* onSubmit */}
        <form>
            <input type="text" className='adminInput' placeholder='Add WhiteList' />
            <button className='adminButton'><BsJournalPlus/></button>
            {/* <input type="submit" className='adminButton' value='+'/> */}
        </form>
    </div>
  )
}

export default AdminPage