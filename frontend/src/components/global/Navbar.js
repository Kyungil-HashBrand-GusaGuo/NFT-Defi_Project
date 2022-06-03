import React, {useState} from 'react'
import './Navbar.css';
import { MdReorder } from "react-icons/md";
import {HeadImg} from '../../images'

function Navbar() {

    const [showLinks, setShowLinks] = useState(false); 

    return (
        <div className='Navbar'>
            <div className='leftSide'>
                <a href='/'><img className='headimg' src={HeadImg}></img></a>
            </div>
            <div className='rightSide'>
                <div className='links' id={showLinks ? "hidden" : ""}>
                    <a href='/pre-minting'>민팅페이지</a>
                    <a href='/whitepaper'>NFT조회</a>
                    <a href='/admin'>관리자페이지</a>
                    <a><button>Connect Wallet</button></a>
                </div>
                    {/* <button>open</button> */}
                    <MdReorder className='listicon' size={40} onClick={()=>setShowLinks(!showLinks)}/>
            </div>

        </div>
    )
}

export default Navbar