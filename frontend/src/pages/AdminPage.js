import React from 'react'
import './AdminPage.css'
import { FaSearch } from "react-icons/fa";

const AdminPage = () => {
  return (
    <div className='adminContainer'>
        {/* onSubmit */}
        <form>
            <input className='adminInput' />
            {/* <button className='adminButton'>asdfasdf</button> */}
            <input className='adminButton'/>
        </form>
    </div>
  )
}

export default AdminPage