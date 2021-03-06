import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './RightMintingSection.css'
import { whiteMintingAction } from '../../redux/actions/whiteMintingAction';
import klayIcon from '../../images/klaytn.png'

const RightMintingSection = () => {

    const dispatch = useDispatch()

    const {account} = useSelector(state => state.account)
    const {whitemintdata, maxSpecialTokenCount, specialTokenCount} = useSelector(state => state.mintdata)
    // console.log("화이트민팅 데이터",whitemintdata)


    const minting = () => {
        dispatch(whiteMintingAction.whiteMintAction(account))
    }


  return (
    <div>
        <div className='rightSideCotainer'>
            <div className='rightMintigSection'>
                <div className='rightMintigSectionDetail1'>
                    <h2>WhiteList Minting</h2>
                </div>
                <div className='rightMintigSectionDetail2'>
                    <div className='testImageBox2'>
                        
                    </div>
                </div>

                <div className='rightMintigSectionDetail4'>
                    <h3>Price : <img className='mintKlayicon' src={klayIcon}/> 2.0 klay</h3>
                    <h3>Count : {specialTokenCount} / {maxSpecialTokenCount}</h3>
                </div>
                <div className='rightMintigSectionDetail5'>
                    <button onClick={minting} className="learn-more">Minting</button>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default RightMintingSection