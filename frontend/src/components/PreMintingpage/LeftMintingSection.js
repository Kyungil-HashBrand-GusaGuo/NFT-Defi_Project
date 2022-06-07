import React, { useState } from 'react'
import './LeftMintingSection.css'
import { useDispatch, useSelector } from 'react-redux';
import { preMintingAction } from '../../redux/actions/preMintingAction';
import MintingModal from './MintingModal'

const LeftMintingSection = () => {

    const dispatch = useDispatch()

    const {account} = useSelector(state => state.account)
    const {premintdata, maxNormalTokenCount, normalTokenCount} = useSelector(state => state.mintdata)
    console.log("프리민팅 데이터",premintdata)
    console.log("account", account)

    const [mintingCount , setMintingCount] = useState(0);

    const mintingCountUp = () => {
        setMintingCount(mintingCount+1)
    }

    const mintingCountDown = () => {
        if(mintingCount > 0)
        setMintingCount(mintingCount-1)
    }
    
    const minting = () => {
        dispatch(preMintingAction.preMintAction(account))
        // if(mintdata !== ''){
        //     const checkMinting = async() => {
        //         await alert("민팅완료!") 
        //     }
        //     checkMinting()
        // }
    }

  return (
    <div>
        <div className='leftSideCotainer'>
            <div className='leftMintigSection'>
                <div className='leftMintigSectionDetail1'>
                    <h2>프리세일 민팅</h2>
                </div>
                <div className='leftMintigSectionDetail2'>
                    <div className='testImageBox1'>
                        
                    </div>
                </div>
                {/* <div className='leftMintigSectionDetail3'>
                    <button className='leftMintigSectionDetail3_button1' onClick={mintingCountDown}> - </button>
                    <button className='leftMintigSectionDetail3_button2'> MINT : {mintingCount} </button>
                    <button className='leftMintigSectionDetail3_button1' onClick={mintingCountUp}> + </button>
                </div> */}
                <div className='leftMintigSectionDetail4'>
                    <h3>Price : 2 klay</h3>
                    <h3>Count : {normalTokenCount} / {maxNormalTokenCount}</h3>
                </div>
                <div className='leftMintigSectionDetail5'>
                    <button onClick={minting} class="learn-more" >Minting</button>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default LeftMintingSection