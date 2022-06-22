import React from 'react'
import "./Modal.css"

const UnStakingModal = () => {

    const goToStake = () => {
      window.location.reload()
    }

  return (
    <div className='overlay'>
        <div className='stakingModalContainer'>
          <div className='stakingMintingInfoSection'>  
            <div>
              <h2 className='stakingMintingComMessage'>UnStaking Success!!!</h2>
              <button className='stakingModalEndButton' onClick={goToStake}>Go to Staking</button> 
            </div>
          </div>
      </div>
    </div>
  )
}

export default UnStakingModal