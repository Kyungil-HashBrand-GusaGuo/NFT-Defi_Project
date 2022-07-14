import React from 'react'
import {logo_PolaBear, logo_Kyungil,logo_HashBrand } from '../../images/index'
import './Partners.css'


const Partners = () => {
  return (
    <div className='partnerContainer'>
        <div className='partnerTitle'>
            <span >Partners</span>
        </div>
        <div className='partnerslogofContainer'>
            <div className='logoSection'>
              <a href='http://www.kiweb.or.kr/?view=pc' target='_blank'><div className='partnerLogo' style={{backgroundImage:"url(" + logo_Kyungil + ")"}}></div>            </a>
              <a href='https://angrypolarbears.com/' target='_blank'><div className='partnerLogo' style={{backgroundImage:"url(" + logo_PolaBear + ")"}}></div>            </a>
              <a href='https://www.hashbrand.kr/' target='_blank'><div className='partnerLogo' style={{backgroundImage:"url(" + logo_HashBrand + ")"}}></div>            </a>
            </div>
        </div>
    </div>
  )
}

export default Partners