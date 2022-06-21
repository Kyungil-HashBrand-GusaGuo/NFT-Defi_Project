import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./MarketPage.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { marketAction } from '../redux/actions/marketAction';
import { mypageAction } from '../redux/actions/mypageAction';
import Dropdown from '../components/MarketPage/DropDown';

const MarketPage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

  const { account } = useSelector(state => state.account);
  const { mymintEditionData } = useSelector(state => state.mintdata)
  const { sellingAllNftData, sellingNftId } = useSelector(state => state.transactionNFT)

  const [showPrice, setShowPrice] = useState(""); // item.price
  const [showId, setShowId] = useState(""); // item.id
   console.log("나의 NFT",mymintEditionData)
  // console.log("나의 NFT 타입",typeof(mymintdata[0].data.edition))
  // console.log("판매중 NFT",sellingAllNftData)
  // console.log("판매중 NFT 타입",typeof(sellingAllNftData[0].id))

  
  const moveBuyPage = (id) => {
    navigate(`/marketpage/${id}`)
  }

  const test = (price, id) => {
    setShowPrice(price);
    setShowId(id);
  }

  const revmymintdata = [...sellingAllNftData].reverse() 


  useEffect(()=>{
    dispatch(marketAction.marketAct())
    dispatch(mypageAction.mypageAct(account))
  },[account])


  return (
    <>
      <div className='mainMarketContainer'>
        <div className='leftMarketContainer'>
          <div className='leftMarketSection'>
            <div className='leftMarketNftCardImg'
              style={{
                backgroundImage: 
                    "url(" + 
                    `https://gateway.pinata.cloud/ipfs/QmfDCXHotQP7tH252h5BPEPX6kLmPJSzKzddnVxQUhrw4m/${showId}.png` + 
                    ")"
              }}
            >
            </div>
            <div className='leftMarketTxtContainer'>
              <div className='leftMarketTitle'>
                <span className='leftMarketCardTxt1'>Create By </span>
                <span className='leftMarketCardTxt2'> GusaGuO</span>
              </div>
              { showId > 9999 ? 
              <div className='leftMarketCardName'>
                <span>WhiteList Zola Man #{showId - 9999}</span>
              </div>
              :
              <div className='leftMarketCardName'>
                <span>Zola Man #{showId}</span>
              </div>
              }
              <div className='leftMarketTestSecion'>
                <div className='leftMarketCardPrice'>
                  <span>Price : {showPrice}</span>
                </div>
                <div className='leftMarketcolhr'></div>
                <div className='leftMarketCardNum'>No : {showId} </div>
              </div>
            </div>
            <div className='leftMarketBtn'>
              <button onClick={() => moveBuyPage(showId)} className="learn-more">Buy Now</button>
            </div>
            <hr className='lefthr'/>
          </div>
        </div>
        <div className='rightMarketContainer'>
          <div className='marketTitleContainer'>
          <h2>ZOLAMAN Market</h2>
          </div>
          <div className="style-five1"></div>
          <hr className="style-five1"/>
          <div className=' rightMarketSection'>
            <div className='rightMarketTitle'>
              {/* <span>ZOLAMAN NFT</span> */}
              {/* <span>Filter</span>
              <button onClick={e => setDropdownVisibility(!dropdownVisibility)}>
                {
                    dropdownVisibility
                        ? 'Close'
                        : 'Open'
                }
              </button>
              <Dropdown visibility={dropdownVisibility}>
                  <ul>
                      <li>background</li>
                      <li>cloak</li>
                      <li>eyes</li>
                      <li>clothes</li>
                      <li>weapon</li>
                  </ul>
              </Dropdown> */}
            </div>
            <div className='rightMarketCardContainer'>                
                {
                  mymintEditionData !== '' && sellingAllNftData !== '' ? 
                  revmymintdata.map((item, index) => {
                    return <div className='rightMarketMainCardList' key={index} onClick={()=> test(item.price, item.id) } >
                      {/* onClick={() => moveBuyPage(item.id)} */}
                      {
                        item.id > 9999 ? 
                        <div className='rightMarketCardList'>
                          <div className='rightMarketNftCard'
                            style={{
                              backgroundImage: 
                                  "url(" + 
                                  `https://gateway.pinata.cloud/ipfs/QmfDCXHotQP7tH252h5BPEPX6kLmPJSzKzddnVxQUhrw4m/${item.id}.png` + 
                                  ")"
                          }}
                          >
                          </div>
                          <div className='rightMarketCardTxtContainer'>
                            <div className='rightMarketCardTxtSection'>
                              <div className='rightMarketCardDnaTxt'>
                                <span className='rightMarketCardDnaTxt1'>Create By </span>
                                <span className='rightMarketCardDnaTxt2'> GusaGuO</span>
                              </div>
                              <div className='rightMarketCardNum'>
                                <span>WhiteList Zola Man #{item.id - 9999}</span>
                              </div>
                              <div className='rightMarketPrice'>
                                <span>Price : {item.price}</span>
                              </div>
                              <div className='rightMarketOwner'>
                                <div className='rightMarketOwner1'>
                                  <span>Ownership : </span>
                                </div>
                                <div className='rightMarketOwner2'>
                                  {
                                  mymintEditionData.includes(item.id) ? <span> Mine </span> : <span> Others </span> 
                                  }
                                </div>
                              </div>
                            </div>    
                          </div>
                        </div>
                        :
                        <>
                        <div className='rightMarketCardList'>
                          <div className='rightMarketNftCard'
                            style={{
                              backgroundImage: 
                                  "url(" + 
                                  `https://gateway.pinata.cloud/ipfs/QmfDCXHotQP7tH252h5BPEPX6kLmPJSzKzddnVxQUhrw4m/${item.id}.png` + 
                                  ")"
                          }}
                          >
                          </div>
                          <div className='rightMarketCardTxtContainer'>
                            <div className='rightMarketCardTxtSection'>
                              <div className='rightMarketCardDnaTxt'>
                                <span className='rightMarketCardDnaTxt1'>Create By </span>
                                <span className='rightMarketCardDnaTxt2'> GusaGuO</span>
                              </div>
                              <div className='rightMarketCardNum'>
                                <span>Zola Man #{item.id}</span>
                              </div>
                              <div className='rightMarketPrice'>
                                <span>Price : {item.price}</span>
                              </div>
                              <div className='rightMarketOwner'>
                                <div className='rightMarketOwner1'>
                                  <span>Ownership : </span>
                                </div>
                                <div className='rightMarketOwner2'>
                                  {
                                  mymintEditionData.includes(item.id) ? <span> MINE </span> : <span> Others </span> 
                                  }
                                </div>
                              </div>
                            </div>    
                          </div>
                        </div>
                        </> 
                      }
                    </div>
                  })
                  : null
                }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MarketPage