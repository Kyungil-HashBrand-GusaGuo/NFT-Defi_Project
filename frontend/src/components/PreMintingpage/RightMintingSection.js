import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './RightMintingSection.css'
import { whiteMintingAction } from '../../redux/action/whiteMintingAction';

const RightMintingSection = () => {

    const dispatch = useDispatch()

    const {account} = useSelector(state => state.account)
    const [mintingCount , setMintingCount] = useState(0);
    const {whitemintdata,maxSpecialTokenCount, specialTokenCount} = useSelector(state => state.mintdata)
    console.log("화이트민팅 데이터",whitemintdata)
    const mintingCountUp = () => {
        setMintingCount(mintingCount+1)
    }

    const mintingCountDown = () => {
        if(mintingCount > 0)
        setMintingCount(mintingCount-1)
    }

    const minting = () => {
        dispatch(whiteMintingAction.whiteMintAction(account))
        // if(mintdata !== ''){
        //     const checkMinting = async() => {
        //         await alert("민팅완료!") 
        //     }
        //     checkMinting()
        // }
    }


  return (
    <div>
        <div className='rightSideCotainer'>
            <div className='rightMintigSection'>
                <div className='rightMintigSectionDetail1'>
                    <h2>화이트리스트 민팅</h2>
                </div>
                <div className='rightMintigSectionDetail2'>
                    <div className='testImageBox2'>
                        
                    </div>
                </div>
                <div className='rightMintigSectionDetail3'>
                    <button className='rightMintigSectionDetail3_button1' onClick={mintingCountDown}> - </button>
                    <button className='rightMintigSectionDetail3_button2'> MINT : {mintingCount} </button>
                    <button className='rightMintigSectionDetail3_button1' onClick={mintingCountUp}> + </button>
                </div>
                <div className='rightMintigSectionDetail4'>
                    <h3>Price : 2 klay</h3>
                    <h3>Count : {specialTokenCount} / {maxSpecialTokenCount}</h3>
                </div>
                <div className='rightMintigSectionDetail5'>
                    <button onClick={minting}>Minting</button>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default RightMintingSection