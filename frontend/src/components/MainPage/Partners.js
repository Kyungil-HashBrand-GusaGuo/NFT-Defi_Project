import React from 'react'
import { logo_DCcomics, logo_Marvel, logo_Diseny, logo_PolaBear } from '../../images'
import './Partners.css'


const Partners = () => {
  return (
    <div className='partnersContainer'>
        <div className='headSection'>Partners</div>
        <div className='logoSection'>
          <div className='partnerLogo' style={{backgroundImage:"url(" + logo_DCcomics + ")"}}></div>
          <div className='partnerLogo' style={{backgroundImage:"url(" + logo_Marvel + ")"}}></div>
          <div className='partnerLogo' style={{backgroundImage:"url(" + logo_Diseny + ")"}}></div>
          <div className='partnerLogo' style={{backgroundImage:"url(" + logo_PolaBear + ")"}}></div>
        </div>
    </div>
  )
}

export default Partners