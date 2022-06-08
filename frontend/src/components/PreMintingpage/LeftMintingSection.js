import React from 'react'
import './LeftMintingSection.css'
import { useDispatch, useSelector } from 'react-redux';
import { preMintingAction } from '../../redux/actions/preMintingAction';
import klayIcon from '../../images/klaytn-klay-logo.png'

const LeftMintingSection = () => {

    const dispatch = useDispatch()

    const {account} = useSelector(state => state.account)
    const {premintdata, maxNormalTokenCount, normalTokenCount} = useSelector(state => state.mintdata)
    console.log("프리민팅 데이터",premintdata)
    console.log("account", account)
   
    const minting = () => {
        dispatch(preMintingAction.preMintAction(account))
    }

  return (
    <div>
        <div className='leftSideCotainer'>
            <div className='leftMintigSection'>
                <div className='leftMintigSectionDetail1'>
                    <h2>Pre-Sale Minting</h2>
                </div>
                <div className='leftMintigSectionDetail2'>
                    <div className='testImageBox1'>
                        
                    </div>
                </div>
                <div className='leftMintigSectionDetail4'>
                    <h3>Price : <img className='mintKlayicon' src={klayIcon}/> 2.0 klay</h3>
                    <h3>Count : {normalTokenCount} / {maxNormalTokenCount}</h3>
                </div>
                <div className='leftMintigSectionDetail5'>
                    <button onClick={minting} className="learn-more" >Minting</button>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default LeftMintingSection