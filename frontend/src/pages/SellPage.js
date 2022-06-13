import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { test } from '../redux/actions/test';
import klayIcon2 from '../images/klaytn.png';
import './SellPage.css'




const SellPage = () => {

    const dispatch = useDispatch();
    let {edition} = useParams()
    console.log("sfsdfs",edition)
    const { account } = useSelector(state => state.account)
    console.log("account",account)
    const { mymintdata } = useSelector(state => state.mintdata)
    console.log("mintdata", mymintdata)

    const selling = () => {
        dispatch(test.testAction(edition, account))
        // 모달창으로 가고, 모달창에서 이런것들을 줘야겠네. 아 이거를 props로 넘겨줘야겠다
        // 모달창에서 useEffect 써서 바로 함수 실행될 수 있도록 
        // 오버레이 처리해주고 
    }

  return (
      <div className='sellMainContainer'>
        <div className='SellMainSection'>
          <div className='SellTitleContainer'>
              <h2>List item for sale</h2>
          </div>
          { mymintdata === "" ? null :
          mymintdata.map((item, index) => (
          <div className='sellTxtContainer' key={index}>
            <div className='leftSellContainer'>
              <div className='leftSection'>
                <div className='leftInputContainer'>
                  <div className='leftAttributeContainer'>
                    <table>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td colSpan={2}>Larry the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
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
            </div>
            <div className='rightSellContainer'>
              <div className='rightCardMainContainer'>
                
                <div className='rightCardList'>
                  <div className='rightNftCard'
                    style={{
                      backgroundImage: 
                          "url(" + 
                          `${item.data.image}` + 
                          ")"
                  }}
                  >
                  </div>
                  <div className='rightCardtxtContainer'>
                        <div className='rightCardTxt'>
                          <div className='rightCardListTitle'>
                              <p>Zolaman nft</p> 
                          </div>
                          <div className='rightCardListName'>
                              <p>{item.data.name}</p>
                          </div>
                        </div>
                        <div className='rightCardTxt'>
                          <div className='rightCardListTitle'>
                          <p>Price </p>
                          </div>
                          <div className='rightCardListPrice'>
                              <img className='klayicon' src={klayIcon2}/><p>2.0</p>
                          </div>
                        </div>
                        <div className='cardDna'>
                          <p>{item.data.dna}</p>
                        </div>
                  </div>
                </div>
                
              </div>
            </div>  
          </div> /*여기 */
          ))}
        </div>
      </div>
    // <div>SellPage{account}</div>
    // <div>SellPage{edition}</div>
    // <div>SellPage{edition}</div>
  )
}

export default SellPage