import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './SwapModal.css'
import {CgArrowsExchangeV, CgCloseO} from "react-icons/cg";
import klayIcon2 from '../../images/klaytn.png'
import headzol from '../../images/headzol.png'
import { stakingViewAction } from '../../redux/actions/stakingViewAction'
import { useLocation, useNavigate } from 'react-router-dom';
import { SwapActModal } from '../index'

const SwapModal = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [amount, setAmount] = useState('')
    const [swapActModalCheck, setSwapActModalCheck] = useState(false)
    const {account} = useSelector(state => state.account)
    const {getKlayBalance, getTokenBalance} = useSelector(state => state.stakingView)
    
    const closePage = () => {
        navigate(`${location.pathname}`)
    }

    const changeAmount = (e) => {
        setAmount(e.target.value)
    }

    const swapBtn = () => {
        setSwapActModalCheck(true)
    }

    useEffect ( () => {
        dispatch(stakingViewAction.stakingViewAct(account))
      },[account])


  return (
    <div className='overlay'>
    {
        swapActModalCheck ? <SwapActModal account={account} amount={amount}/> : null
    }
        <div className='swapModalContainer'>
            <div className='swapModalSection'>
                <div className='swapModalTitle'>
                    <h2>Swap Page</h2>
                    {/* <h1 onClick={closePage}><CgCloseO/></h1> */}
                </div>  
                <div className='swapModalInfoSection'>
                    <div className='swapModalBalance'>
                        <div>From</div>
                        <div>Balance : {getTokenBalance}</div>
                    </div>
                    <div className='swapModalInput'>
                        <div className='swapModalInputLeft'>
                            <div className='swapModalInputIcoSection'>
                                <img className='swapModalInputIco' src={headzol}/>
                            </div>
                            <div>ZLT</div>
                        </div>
                        <input type="number" min="1" placeholder='Amount' onChange={changeAmount}/>
                    </div>
                    <div className='swapModalCenterLine'>
                        <hr/>
                        <div className='swapModalCenterIcon'><CgArrowsExchangeV/></div>
                        <hr/>
                    </div>
                    <div className='swapModalBalance'>
                        <div>To</div>
                        <div>Balance : {getKlayBalance}</div>
                    </div>
                    <div className='swapModalInput'>
                        <div className='swapModalInputLeft'>
                            <div className='swapModalInputIcoSection'>
                                <img className='swapModalInputIco' src={klayIcon2}/>
                            </div>
                            <div>KLAY</div>
                        </div>
                        <input value={amount} disabled/>
                    </div>
                </div>  
                <div className='swapModalBtnSection'>
                    <button className='swapModalBtn' onClick={swapBtn}>SWAP</button>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default SwapModal