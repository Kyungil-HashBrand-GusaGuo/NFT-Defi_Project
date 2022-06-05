import React, {useEffect, useState} from 'react'
import './Navbar.css';
import { MdReorder } from "react-icons/md";
import {HeadImg} from '../../images'
import { useDispatch, useSelector } from 'react-redux';
import { connectAccount } from '../../redux/actions/connectAccount' 

function Navbar() {

    const dispatch = useDispatch();

    const [showLinks, setShowLinks] = useState(false); 
    const {account} = useSelector(state => state.account)

    const connectWallet = () => {
        if(window.klaytn)
        dispatch(connectAccount.getAccount())
        //getAccount();
    }

    useEffect(() => {
        if(account === '') connectWallet()
      },);

    return (
        <div className='Navbar'>
            <div className='leftSide'>
                <a href='/'><img className='headimg' src={HeadImg}></img></a>
            </div>
            <div className='rightSide'>
                <div className='links' id={showLinks ? "hidden" : ""}>
                    <a href='/pre-minting'>민팅페이지</a>
                    <a href='/mypage'>마이페이지</a>
                    <a href='/admin'>관리자페이지</a>
                    {
                        account === '' ? <a><button onClick={connectWallet}>Connect Wallet</button></a> 
                        : <a><button>{account.substr(0,6)}...{account.slice(-6)}</button></a> 
                    }
                </div>
                    {/* <button>open</button> */}
                    <MdReorder className='listicon' size={40} onClick={()=>setShowLinks(!showLinks)}/>
            </div>

        </div>
    )
}

export default Navbar