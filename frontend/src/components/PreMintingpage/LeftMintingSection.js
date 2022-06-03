import React, { useState } from 'react'
import './LeftMintingSection.css'

const LeftMintingSection = () => {

    const [mintingCount , setMintingCount] = useState(0);

    const mintingCountUp = () => {
        setMintingCount(mintingCount+1)
    }

    const mintingCountDown = () => {
        if(mintingCount > 0)
        setMintingCount(mintingCount-1)
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
                <div className='leftMintigSectionDetail3'>
                    <button className='leftMintigSectionDetail3_button1' onClick={mintingCountDown}> - </button>
                    <button className='leftMintigSectionDetail3_button2'> MINT : {mintingCount} </button>
                    <button className='leftMintigSectionDetail3_button1' onClick={mintingCountUp}> + </button>
                </div>
                <div className='leftMintigSectionDetail4'>
                    <h3>Price : 60 klay</h3>
                    <h3>Count : 150 / 2000</h3>
                </div>
                <div className='leftMintigSectionDetail5'>
                    <button>Minting</button>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default LeftMintingSection