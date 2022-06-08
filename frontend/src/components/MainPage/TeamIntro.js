import React from 'react'
import './TeamIntro.css'
import {Team1, Team2, Team3, Team4, Team5} from '../../images';

const TeamIntro = () => {
  return (
      <>
        <span className='teamIntroTitle'>Team</span>
        <div className='teamIntroContainer'>
            <div className='TeamIntro'>
                <div className='Team'>
                    <div className='teamimg'>
                        <img src={Team1}></img>
                    </div>
                    <div className='teamtxt'>
                        <span>JunghyunB</span>
                        <span>Block Chain</span>
                    </div>
                </div>
                <div className='Team'>
                    <div className='teamimg'>
                        <img src={Team2}></img>
                    </div>
                    <div className='teamtxt'>
                        <span>Rmfkxhxh</span>
                        <span>Block Chain</span>
                    </div>
                </div>
                <div className='Team'>
                    <div className='teamimg'>
                        <img src={Team3}></img>
                    </div>
                    <div className='teamtxt'>
                        <span>Sieun95</span>
                        <span>Back end</span>
                    </div>
                </div>
                <div className='Team'>
                    <div className='teamimg'>
                        <img src={Team4}></img>
                    </div>
                    <div className='teamtxt'>
                        <span>Jaewoneeee</span>
                        <span>Front end</span>
                    </div>
                </div>
                <div className='Team'>
                    <div className='teamimg'>
                        <img src={Team5}></img>
                    </div>
                    <div className='teamtxt'>
                        <span>Taehhh8</span>
                        <span>Front end</span>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default TeamIntro