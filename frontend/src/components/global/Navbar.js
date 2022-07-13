import React, {useEffect, useState} from 'react'
import './Navbar.css';
import { MdReorder } from "react-icons/md";
import {HeadImg} from '../../images/index'
import { useDispatch, useSelector } from 'react-redux';
import { connectAccount } from '../../redux/actions/connectAccount' 
import { SwapModal } from '../index'
import { swapModalAction } from '../../redux/actions/swapModalAction'
import { Link } from 'react-router-dom'


function Navbar() {

    const dispatch = useDispatch();
    const [showLinks, setShowLinks] = useState(false); 
    const [userInfoCheck, setUserInfoCheck] = useState('none')
    const {account, whiteListCheck, adminAccount} = useSelector(state => state.account)
    const {swapModalChange} = useSelector(state => state.stakingView)
    // console.log("화이트리스트 체크",whiteListCheck)
    // console.log("어드민계정 체크",adminAccount)

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

    const changeSwapModal = () => {
        dispatch(swapModalAction.swapModalAct("open"))
    }

    useEffect(() => {
        if(account === '') connectWallet()
      },);

    return (
        <>
        <div className='Navbar'>
            <div className='leftSide'>
                <Link to="/"><img className='headimg' src={HeadImg}></img></Link>
            </div>
            <div className='rightSide'>
                <div className='links' id={showLinks ? "hidden" : ""}>
                    {/* <Link to="/pre-minting">Pre-Minting</Link> */}
                    <a href='/pre-minting'>Pre-Minting</a>
                    <Link to="/all-minting">Collection</Link>
                    <Link to="/mypage">MyPage</Link>
                    <Link to="/market">Market</Link>
                    <Link to="/staking">Staking</Link>
                    { adminAccount === account ? <Link to="/admin">AdminPage</Link> : null}                    
                    {
                        account === ''  
                        ?   <a><button onClick={connectWallet}>Connect Wallet</button></a> 
                        : 
                            <a><button onClick={userInfo}>{account.substr(0,6)}...{account.slice(-6)}</button>
                            {
                            whiteListCheck ?
                            (
                                adminAccount === account ?
                                <div className='userInfoBox' style={{display:userInfoCheck}}>
                                    <div className='userInfoBoxTitle'>Admin</div>
                                    <div className='userInfoBoxBtn' onClick={changeSwapModal}>SWAP</div>
                                </div>
                                :
                                <div className='userInfoBox' style={{display:userInfoCheck}}>
                                    <div className='userInfoBoxTitle'>White List</div>
                                    <div className='userInfoBoxBtn' onClick={changeSwapModal}>SWAP</div>
                                </div>
                            )
                            : <>
                            <div className='userInfoBox' style={{display:userInfoCheck}}>
                                <div className='userInfoBoxTitle'>Normal</div>
                                <div className='userInfoBoxBtn' onClick={changeSwapModal}>SWAP</div>
                            </div>
                            </>
                            }
                            </a> 
                    }
                    
                </div>
                    <MdReorder className='listicon' size={40} onClick={()=>setShowLinks(!showLinks)}/>
            </div>
        </div>
        { swapModalChange ? <SwapModal/> : null}
        </>
    )
}

export default Navbar