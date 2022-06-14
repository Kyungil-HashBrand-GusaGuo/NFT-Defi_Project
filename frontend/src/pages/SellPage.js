import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import klayIcon2 from '../images/klaytn.png';
import './SellPage.css'
import { SellModal, CancelSellModal } from '../components';
import axios from 'axios';



const SellPage = () => {

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
    const [showMint, setShowMint] = useState();
    const [price, setPrice] = useState();

    

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
      console.log("민트", mintJSON.data)
      setCheckSell(state)
      setShowMint(mintJSON.data);
    }
    
    const changePrice = (e) => {
      setPrice(e.target.value)
    }

    console.log(price)
    

    useEffect(()=>{
      callSellNft()
    },[])

  return (
      <div className='sellMainContainer'>
        <div className='SellMainSection'>
          <div className='SellTitleContainer'>
              <h2>List item for sale</h2>
          </div>
          { showMint ? 
          <div className='sellTxtContainer'>
            <div className='leftSellContainer'>
              <div className='leftSection'>
                <div className='leftInputContainer'>
                  <div>
                  {
                    sellModal ? <SellModal edition={edition} account={account} price={price}/> : null
                  }
                  {
                    cancelSellModal ? <CancelSellModal edition={edition} account={account} price={price}/> : null
                  }
                  </div>
                  <div className='leftAttributeContainer'>
                    <table>
                      <thead>
                        <tr>
                          <th>{showMint.attributes[0].trait_type}</th>
                          <th>{showMint.attributes[1].trait_type}</th>
                          <th>{showMint.attributes[2].trait_type}</th>
                          <th>{showMint.attributes[3].trait_type}</th>
                          <th>{showMint.attributes[4].trait_type}</th>
                          <th>{showMint.attributes[5].trait_type}</th>
                          <th>{showMint.attributes[6].trait_type}</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{showMint.attributes[0].value}</td>
                          <td>{showMint.attributes[1].value}</td>
                          <td>{showMint.attributes[2].value}</td>
                          <td>{showMint.attributes[3].value}</td>
                          <td>{showMint.attributes[4].value}</td>
                          <td>{showMint.attributes[5].value}</td>
                          <td>{showMint.attributes[6].value}</td>
                    
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className='leftInput' >
                    <div className='leftInputTitle'>
                    <p>Price</p>
                    </div>
                    <div className='leftInputsection'>
                      <input type="image" src={klayIcon2} className="lefticoninput"></input>
                      <input type="number" min="1" placeholder='Amount' className='lefttxtinput' onChange={changePrice}/>
                    </div>
                  </div>
                  <div className='leftbtn'>
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
                          `${showMint.image}` + 
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
                              <p>{showMint.name}</p>
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
                          <p>{showMint.dna}</p>
                        </div>
                  </div>
                </div>
                
              </div>
            </div>
           
          </div>
          : null  
          }
        </div>
      </div>
  )
}

export default SellPage