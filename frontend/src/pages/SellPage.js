import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import klayIcon2 from '../images/klaytn.png';
import './SellPage.css'
import { SellModal, CancelSellModal } from '../components';
import { TbArrowBack } from "react-icons/tb";
import { stakingViewAction } from '../redux/actions/stakingViewAction'
import api from '../redux/api'
import pinataApi from '../redux/pinataApi';

const SellPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    let {edition} = useParams()
    const { account } = useSelector(state => state.account)
    const { sellingAllNftData } = useSelector(state => state.transactionNFT)
    const { stakingNftString } = useSelector(state => state.stakingView)
    const [sellModal, setSellModal] = useState(false)
    const [cancelSellModal, setCancelSellModal] = useState(false)
    const [checkSell, setCheckSell] = useState()
    const [showMint, setShowMint] = useState();
    const [price, setPrice] = useState();
    const [sellPrice, setSellPrice] = useState();
    console.log("NFT데이터 스테이킹?",stakingNftString)
    console.log("NFT데이터 스테이킹?",stakingNftString.includes(edition))
    console.log(typeof(edition))

    const changeSellModalState = () => {
      setSellModal(true)
    }
    const changeCancelSellModalState = () => {
      setCancelSellModal(true)
    }

    const previousPage = () => {
      navigate(`/mypage`)
    }

    const callSellNft = async() => {
      const response = await api.get("/block/getOnSaleJolaman");
      const mintJSON = await pinataApi.get(`/${edition}.json`)
      let state = response.data[0].includes(edition)
      // console.log("민트데이터",mintJSON)
      // console.log("배열확인", response.data[0])
      // console.log("배열확인", state)
      // console.log("민트", mintJSON.data)
      setCheckSell(state)
      setShowMint(mintJSON.data);

      console.log("NFT데이터22",sellingAllNftData)

      for(let i=0; i < sellingAllNftData.length; i++){
        let check = edition
        if (sellingAllNftData[i].id == check) {
          setSellPrice(sellingAllNftData[i].price)
        }
      }
    }
    
    const changePrice = (e) => {
      setPrice(e.target.value)
    }

    useEffect(()=>{
      dispatch(stakingViewAction.stakingViewAct(account))
      callSellNft()
    },[])

  return (
    <>
        {
          sellModal ? <SellModal edition={edition} account={account} price={price}/> : null
        }
        {
          cancelSellModal ? <CancelSellModal edition={edition} account={account} price={price}/> : null
        }
    <div className='sellMainContainer'>
        <div className='SellMainSection'>
          <div className='SellTitleContainer'>
              <h2>List item for sale</h2>
              <div className='sellBackPage'><h1><TbArrowBack size={40} onClick={()=>previousPage()}/></h1>
              </div>
          </div>
          
          { showMint ? 
          <div className='sellTxtContainer'>
            <div className='leftSellContainer'>
              <div className='leftSection'>
                <div className='leftInputContainer'>
                  <div className='leftTableTitle'>
                    <p>NFT Attributes</p>
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
                        </tr>
                      </tbody>
                    </table>
                  </div>
                    {
                      checkSell ?  
                      <>
                        <div className='leftInput' >
                          <div className='leftInputsection'>
                          </div>
                        </div>
                        <div className='leftbtn'>
                          <button onClick={changeCancelSellModalState} className="learn-more">Cancel Sell</button>
                        </div>
                      </>
                     :             
                      (
                        stakingNftString.includes(edition) ?
                        <>
                          <div className='leftInput' >
                            <div className='leftInputsection'>
                            </div>
                          </div>
                          <div className='leftbtn'>
                            <button className="learn-more">Staking</button>
                          </div>
                      </>
                      : 
                      <>
                        <div className='leftInput' >
                          {/* <div className='leftInputTitle'>
                            <p>Price</p>
                          </div> */}
                          <div className='leftInputsection'>
                            <input type="image" src={klayIcon2} className="lefticoninput"></input>
                            <input type="number" min="1" placeholder='Price' className='lefttxtinput' onChange={changePrice}/>
                            {/* <button onClick={changeSellModalState} className="learn-more">Sell</button> */}
                          </div>
                        </div>
                        <div className='leftbtn'>
                          <button onClick={changeSellModalState} className="learn-more">Sell</button>
                        </div>
                      </>
                      )
                    }
                </div>
              </div>
            </div>
            
            <div className='rightSellContainer'>
              <div className='rightCardMainContainer'>
                
                <div className='rightCardList'>
                  <div className='rightNftCard'
                    style={{
                      backgroundImage: 
                          "url(https://sean95.s3.ap-northeast-2.amazonaws.com/raw/Zolaman/" + 
                          `${showMint.edition}` + 
                          ".png)"
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
                        {
                          checkSell ?  
                          <>
                            <div className='rightCardTxt'>
                              <div className='rightCardListTitle'>
                              <p>Price </p>
                              </div>
                              <div className='rightCardListPrice'>
                                  <img className='klayicon' src={klayIcon2}/><p>{sellPrice}</p>
                              </div>
                            </div>
                          </>
                        : 
                          (
                          stakingNftString.includes(edition) ?
                          <div className='rightCardTxt'>
                            <div className='rightCardtxtButton'>
                                <div className='rightCardlisttitleButton'>
                                    Staking
                                </div>
                            </div>
                          </div>
                          :
                            <div className='rightCardTxt'>
                              <div className='rightCardtxtButton'>
                                  <div className='rightCardlisttitleButton'>
                                      Available for Sale
                                  </div>
                              </div>
                            </div>
                          )
                        }
                  </div>
                </div>
                
              </div>
            </div>
           
          </div>
          : null  
          }
        </div>
      </div>
      </>
  )
}

export default SellPage