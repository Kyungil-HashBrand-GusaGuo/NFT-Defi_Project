import React from 'react'
import './RoadMap.css'
import arrowIcon from '../../images/arrow2.png'


const RoadMap = () => {
  return (
    <>
    <span className='roadMapTitle'>Road Map</span>
    <div className='roadMapContainer'>
      <div className='roadMapContainer1'>
        <div className='roadtxtContainer'>
          <div className='roadMaptxtSection'>
            <div className='roadMaptxtSectionDetail1'>
              <h2>Phase 00</h2>
            </div>
            <div className='roadMaptxtSectionDetail2'>
              <p>
                1
              </p>
            </div> 
          </div>
        </div>
        <div className='arrowContainer'>
          <img className='arrowImg' src={arrowIcon} ></img>
        </div>
        <div className='roadtxtContainer'>
          <div className='roadMaptxtSection'>
            <div className='roadMaptxtSectionDetail1'>
              <h2>Phase 01</h2>
            </div>
            <div className='roadMaptxtSectionDetail2'>
              <p>
                2
              </p>
            </div> 
          </div>
        </div>
        <div className='arrowContainer'>
          <img className='arrowImg' src={arrowIcon} ></img>
        </div>
        <div className='roadtxtContainer'>
          <div className='roadMaptxtSection'>
            <div className='roadMaptxtSectionDetail1'>
              <h2>Phase 02</h2>
            </div>
            <div className='roadMaptxtSectionDetail2'>
              <p>
                3
              </p>
            </div> 
          </div>
        </div>
      </div>
      <div className='roadMapContainer2'>
        <div className='roadtxtContainer'>
          <div className='roadMaptxtSection'>
            <div className='roadMaptxtSectionDetail1'>
              <h2>Phase 03</h2>
            </div>
            <div className='roadMaptxtSectionDetail2'>
              <p>
                4
              </p>
            </div> 
          </div>
        </div>
        <div className='arrowContainer'>
          <img className='arrowImg' src={arrowIcon} ></img>
        </div>
        <div className='roadtxtContainer'>
          <div className='roadMaptxtSection'>
            <div className='roadMaptxtSectionDetail1'>
              <h2>Phase 04</h2>
            </div>
            <div className='roadMaptxtSectionDetail2'>
              <p>
                5
              </p>
            </div> 
          </div>
        </div>
        <div className='arrowContainer'>
          <img className='arrowImg' src={arrowIcon} ></img>
        </div>
        <div className='roadtxtContainer'>
          <div className='roadMaptxtSection'>
            <div className='roadMaptxtSectionDetail1'>
              <h2>Phase 05</h2>
            </div>
            <div className='roadMaptxtSectionDetail2'>
              <p>
                6
              </p>
            </div> 
          </div>
        </div>
      </div>
      {/* <div className='roadMapContainer3'>
        <div className='roadtxtContainer'>
          <div className='roadMaptxtSection'>
            <div className='roadMaptxtSectionDetail1'>
              <h2>Pre-Sale Minting</h2>
            </div>
            <div className='roadMaptxtSectionDetail2'>
              <p>
                dfdsfds
              </p>
            </div> 
          </div>
        </div>
        <div className='arrowContainer'>
          <img className='arrowImg' src={arrowIcon} ></img>
        </div>
        <div className='roadtxtContainer'>
          <div className='roadMaptxtSection'>
            <div className='roadMaptxtSectionDetail1'>
              <h2>Pre-Sale Minting</h2>
            </div>
            <div className='roadMaptxtSectionDetail2'>
              <p>
                dfdsfds
              </p>
            </div> 
          </div>
        </div>
        <div className='arrowContainer'>
          <img className='arrowImg' src={arrowIcon} ></img>
        </div>
        <div className='roadtxtContainer'>
          <div className='roadMaptxtSection'>
            <div className='roadMaptxtSectionDetail1'>
              <h2>Pre-Sale Minting</h2>
            </div>
            <div className='roadMaptxtSectionDetail2'>
              <p>
                dfdsfds
              </p>
            </div> 
          </div>
        </div>
      </div>  */}
    </div>
    
    </>
  )
}

export default RoadMap