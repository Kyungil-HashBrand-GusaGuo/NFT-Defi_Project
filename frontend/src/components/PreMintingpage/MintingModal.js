import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./MintingModal.css"

const MintingModal = ({premintdata, whitemintdata}) => {
    // console.log('모달 프리', premintdata)
    // console.log('모달 화이트', whitemintdata)

    const navigate = useNavigate();
    const [state, setState] = useState();
    
    const goToMypage = () => {
      navigate('/mypage')
    }
    
    useEffect( () => {
      if(premintdata != null) {
        setState(premintdata)
      } else {
        setState(whitemintdata)
      }
    },[])
    

  return (
    <div className='overlay'>
      <div className='modalContainer'>
        {
          state != null ?
          <div className='mintingImageSection'
            style={{backgroundImage:
              "url(" + state.image + ")"
            }}
          > 
          </div>
          : null
        }
        <div className='mintingInfoSection'>
          { state != null ? <h1 className='mintingName'>{state.name}</h1> : null }  
          <h2 className='mintingMessage'>Minting Success !!</h2>
          <button className='modalEndButton' onClick={goToMypage}>Go to Mypage</button>
        </div>
      </div>
    </div>
  )
}

export default MintingModal