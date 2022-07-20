import React from 'react'
import './TeamIntro.css'
import { white1, white7, white10, white17, white18,} from '../../images/index'

const TeamIntro = () => {
  return (
      <>
        <span className='teamIntroTitle'>Team</span>
        <div className='teamIntroContainer'>
            <div className='TeamIntro'>
                <div className='Team'>
                    <div className='teamimg'>
                        <img src={white7}></img>
                    </div>
                    <div className='teamtxt'>
                        <span className='spanName'>JunghyunB</span>
                        <span>Block Chain</span>
                    </div>
                </div>
                <div className='Team'>
                    <div className='teamimg'>
                        <img src={white18}></img>
                    </div>
                    <div className='teamtxt'>
                        <span  className='spanName'>Rmfkxhxh</span>
                        <span>Block Chain</span>
                    </div>
                </div>
                <div className='Team'>
                    <div className='teamimg'>
                        <img src={white1}></img>
                    </div>
                    <div className='teamtxt'>
                        <span className='spanName'>Sieun95</span>
                        <span>Back end</span>
                    </div>
                </div>
                <div className='Team'>
                    <div className='teamimg'>
                        <img src={white17}></img>
                    </div>
                    <div className='teamtxt'>
                        <span className='spanName'>Jaewoneeee</span>
                        <span>Front end</span>
                    </div>
                </div>
                <div className='Team'>
                    <div className='teamimg'>
                        <img src={white10}></img>
                    </div>
                    <div className='teamtxt'>
                        <span className='spanName'>Taehhh8</span>
                        <span>Front end</span>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default TeamIntro