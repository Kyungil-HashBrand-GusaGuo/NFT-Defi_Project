import React, { useState } from 'react'
import './RightMintingSection.css'

const RightMintingSection = () => {

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
                    <h3>Price : 100 klay</h3>
                    <h3>Count : 150 / 2000</h3>
                </div>
                <div className='rightMintigSectionDetail5'>
                    <button>Minting</button>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default RightMintingSection