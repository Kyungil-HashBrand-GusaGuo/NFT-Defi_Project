import React from 'react'
import './RightMintingSection.css'

const RightMintingSection = () => {
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
                    <button className='rightMintigSectionDetail3_button1'> - </button>
                    <button className='rightMintigSectionDetail3_button2'> MINT : 1 </button>
                    <button className='rightMintigSectionDetail3_button1'> + </button>
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