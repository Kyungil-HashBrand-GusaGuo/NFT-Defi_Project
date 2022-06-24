import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './SwapModal.css'
import {CgArrowsExchangeV, CgCloseO} from "react-icons/cg";
import {FaCaretDown} from "react-icons/fa";
import klayIcon2 from '../../images/klaytn.png'
import headzol from '../../images/headzol.png'
import headzol2 from '../../images/headzol2.png'
import { stakingViewAction } from '../../redux/actions/stakingViewAction'
import { swapModalAction } from '../../redux/actions/swapModalAction';
import { SwapActModal } from '../index'

const SwapModal = () => {

    const dispatch = useDispatch()
    const [amount, setAmount] = useState('')
    const [swapActModalCheck, setSwapActModalCheck] = useState(false)
    const [toggleState, setToggleState] = useState(false)
    const [pageState, setPageState] = useState(false)
    const {account} = useSelector(state => state.account)
    const {getKlayBalance, getTokenBalance, getGameTokenBalance} = useSelector(state => state.stakingView)
    
    const closePage = () => {
        dispatch(swapModalAction.swapModalAct())
    }

    const changeAmount = (e) => {
        setAmount(e.target.value)
    }

    const changeToggle = () => {
        if(toggleState){
            setToggleState(false)
        } else {
            setToggleState(true)
        }
    }

    const changePage = () => {
        if(pageState){
            setPageState(false)
            setToggleState(false)
        } else {
            setPageState(true)
            setToggleState(false)
        }
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
                    <h1 onClick={closePage}><CgCloseO/></h1>
                </div> 
                {
                    pageState ?
                    <>
                    <div className='swapModalInfoSection'>
                        <div className='swapModalBalance'>
                            <div>From</div>
                            <div>Balance : {getGameTokenBalance}</div>
                        </div>
                        <div className='swapModalInput'>
                            <div className='swapModalInputLeft'>
                                {
                                    toggleState ? <button className='swapModalInputTest' onClick={()=>changePage()}>
                                        <img className='swapModalInputIco' src={headzol}/>
                                    </button> : null
                                }
                                <div className='swapModalInputIcoSection'>
                                    <img className='swapModalInputIco' src={headzol2}/>
                                </div>
                                <div className='swapModalInputName'>GZLT</div>    
                                <button className='swapModalInputToggle'onClick={()=>changeToggle()}><FaCaretDown/></button>
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
                            <input value={amount/10} disabled/>
                        </div>
                    </div>  
                    <div className='swapModalBtnSection'>
                        <button className='swapModalBtn'>GZLT SWAP</button>
                    </div>
                    </> 
                    :
                    <>
                    <div className='swapModalInfoSection'>
                        <div className='swapModalBalance'>
                            <div>From</div>
                            <div>Balance : {getTokenBalance}</div>
                        </div>
                        <div className='swapModalInput'> 
                            <div className='swapModalInputLeft'>
                                {
                                    toggleState ? <button className='swapModalInputTest' onClick={()=>changePage()}>
                                        <img className='swapModalInputIco' src={headzol2}/>
                                    </button> : null
                                }
                                <div className='swapModalInputIcoSection'>
                                    <img className='swapModalInputIco' src={headzol}/>
                                </div>
                                <div className='swapModalInputName'>ZLT</div>    
                                <button className='swapModalInputToggle'onClick={()=>changeToggle()}><FaCaretDown/></button>
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
                        <button className='swapModalBtn' onClick={swapBtn}>ZLT SWAP</button>
                    </div>
                    </> 
                } 


            </div>
        </div>
    </div>
  )
}

export default SwapModal