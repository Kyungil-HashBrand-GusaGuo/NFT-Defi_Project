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
                  민팅 완료 후 ZOLMAN NFT 보유한 홀더 모두에게 한정판 NFT를 부여
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
                서울시 관할 로드 광고판에 
                ‘완판 기념’ 광고
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
              거버넌스 기능을
              홈페이지에 추가
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
              한정판 NFT인 ‘VERYVERYSTRONG ZOLAMAN’을
              홀더만 구매가 가능하도록 오픈예정
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
                  세계화를 위하여
                  국내,국제 상위 엔터테인먼트에 협업을 제안
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
                샌드박스에 복셀 아바타와 ZOLAMAN
                게임 개발 예정
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