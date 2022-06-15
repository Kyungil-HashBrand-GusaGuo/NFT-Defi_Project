import React, {useEffect, useState} from 'react'
import './Navbar.css';
import { MdReorder } from "react-icons/md";
import {HeadImg} from '../../images'
import { useDispatch, useSelector } from 'react-redux';
import { connectAccount } from '../../redux/actions/connectAccount' 

function Navbar() {

    const dispatch = useDispatch();

    const [showLinks, setShowLinks] = useState(false); 
    const [userInfoCheck, setUserInfoCheck] = useState('none')
    const {account, whiteListCheck} = useSelector(state => state.account)
    console.log("화이트리스트 체크",whiteListCheck)

    const connectWallet = () => {
        if(window.klaytn)
        dispatch(connectAccount.getAccount())
        //getAccount();
    }

    const userInfo = () => {
        if(userInfoCheck === 'none'){
            setUserInfoCheck('')
        }
        else{
            setUserInfoCheck('none')
        }
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
                    <a href='/pre-minting'>Pre-Minting</a>
                    <a href='/all-minting'>Collection</a>
                    <a href='/mypage'>MyPage</a>
                    <a href='/market'>Market</a>
                    <a href='/staking'>Staking</a>
                    <a href='/admin'>AdminPage</a>
                    {
                        account === '' ? <a><button onClick={connectWallet}>Connect Wallet</button>
                        {
                        whiteListCheck ? <div className='userInfoBox' style={{display:userInfoCheck}}>White List</div>
                        : <div className='userInfoBox' style={{display:userInfoCheck}}>Normal</div>
                        }
                        </a> 
                        : <a><button onClick={userInfo}>{account.substr(0,6)}...{account.slice(-6)}</button>
                        {
                        whiteListCheck ? <div className='userInfoBox' style={{display:userInfoCheck}}>White List</div>
                        : <div className='userInfoBox' style={{display:userInfoCheck}}>Normal</div>
                        }
                        </a> 
                    }
                    
                </div>
                    <MdReorder className='listicon' size={40} onClick={()=>setShowLinks(!showLinks)}/>
            </div>

        </div>
    )
}

export default Navbar