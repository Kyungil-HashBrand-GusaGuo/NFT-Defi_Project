import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import klayIcon2 from '../images/klaytn.png';
import './SellPage.css'
import { SellModal, CancelSellModal } from '../components';
import axios from 'axios';



const SellPage = () => {

    const dispatch = useDispatch();
    let {edition} = useParams()
    console.log("sfsdfs",edition)
    const { account } = useSelector(state => state.account)
    console.log("account",account)
    const { mymintdata } = useSelector(state => state.mintdata)
    console.log("mintdata", mymintdata)
    //console.log(edition)
    const [sellModal, setSellModal] = useState(false)
    const [cancelSellModal, setCancelSellModal] = useState(false)
    const [checkSell, setCheckSell] = useState()

    const changeSellModalState = () => {
      setSellModal(true)
    }
    const changeCancelSellModalState = () => {
      setCancelSellModal(true)
    }

    const callSellNft = async() => {
      const response = await axios.get("http://34.64.61.199:9495/block/getOnSaleJolaman");
      const mintJSON = await axios.get(`https://gateway.pinata.cloud/ipfs/QmXYi44PkJbNzH4nT13ZgEnKaibppUsfPCW4NpDigEBgXE/${edition}.json`)
      console.log("민트데이터",mintJSON)
      let state = response.data[0].includes(edition)
      console.log("배열확인", response.data[0])
      console.log("배열확인", state)
      setCheckSell(state)
    }
    
    useEffect(()=>{
      callSellNft()
    },[])

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
                  <div>
                  {
                    sellModal ? <SellModal edition={edition} account={account}/> : null
                  }
                  {
                    cancelSellModal ? <CancelSellModal edition={edition} account={account}/> : null
                  }
                  </div>
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
                    {/* <button onClick={selling} className="learn-more">Complete listing</button> */}
                    {
                      checkSell ? <button onClick={changeCancelSellModalState} className="learn-more">Cancel Sell</button> : <button onClick={changeSellModalState} className="learn-more">Sell</button>

                    }
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
  )
}

export default SellPage