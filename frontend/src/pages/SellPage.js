import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { test } from '../redux/actions/test';
import klayIcon2 from '../images/klaytn.png';
import './SellPage.css'

const SellPage = () => {

    const dispatch = useDispatch();
    let {edition} = useParams()
    console.log(edition)
    const { account } = useSelector(state => state.account)
    console.log(account)

    const selling = () => {
        dispatch(test.testAction(edition, account))
        // 모달창으로 가고, 모달창에서 이런것들을 줘야겠네. 아 이거를 props로 넘겨줘야겠다
        // 모달창에서 useEffect 써서 바로 함수 실행될 수 있도록 
        // 오버레이 처리해주고 
    }

  return (
    <div className='sellMainContainer'>
      <div className='leftSellContainer'>
        <div className='leftSection'>
          <div className='leftTitle'>
            <h1>
              List item for sale
            </h1>
          </div>
          <div className='leftInput'>
            <div className='leftInputTitle'>
              <p>Price</p>
            </div>
            <div className='leftInputsection'>
              <input type="image" src={klayIcon2} className="lefticoninput"></input>
              <input type="text" placeholder='Amount' className='lefttxtinput'/>
            </div>
          </div>
          <div className='leftbtn'>
            <button onClick={selling} className="learn-more">Complete listing</button>
          </div>
        </div>
      </div>
      <div className='rightSellContainer'>
          <div className='rightTitle'>
            <h1>PreView</h1>
          </div>
        <div className='cardListContainer'>
              <div className='myNftCard'>
              </div>
              <div className='cardtxtContainer'>
                  <div className='cardtxt'>
                      <div className='cardlisttitle'>
                          <p>Zolaman nft</p> 
                      </div>
                      <div className='cardlistname'>
                          <p></p>
                      </div>
                  </div>
                  <div className='cardtxt'>
                      <div className='cardlisttitle'>
                      <p>Price </p>
                      </div>
                      <div className='cardlistprice'>
                          <img className='klayicon' src={klayIcon2}/><p>2.0</p>
                      </div>
                  </div>
              </div>
        </div>
      </div>
      {/* <div>SellPage{account}</div>
      <div>SellPage{edition}</div>
      <div>SellPage{edition}</div> */}
    </div>
  )
}

export default SellPage