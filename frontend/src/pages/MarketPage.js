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
   console.log("나의 NFT",mymintEditionData)
  // console.log("나의 NFT 타입",typeof(mymintdata[0].data.edition))
  // console.log("판매중 NFT",sellingAllNftData)
  // console.log("판매중 NFT 타입",typeof(sellingAllNftData[0].id))

  
  const moveBuyPage = (index) => {
    navigate(`/marketpage/${index}`)
  }

  useEffect(()=>{
    dispatch(marketAction.marketAct())
    dispatch(mypageAction.mypageAct(account))
  },[account])


  return (
    <>
      <div className='marketTitleContainer'>
                <h2>ZOLAMAN Market</h2>
      </div>
      <div className="style-five"></div>
      <hr className="style-five"/> 
      <div className='mainMarketContainer'>
         <div className='leftMarketContainer'>
          <div className='leftMarketSection'>
            <div className='leftMarketNftCardImg'>
              
            </div>
            <div className='leftMarketBtn'>
              {/* <button onClick={() => moveBuyPage(item.id)} className="learn-more" >Minting</button> */}
              <button className="learn-more" >Buy Now</button>
            </div>
          </div>
        </div>
        
        <div className='rightMarketContainer'>
          <div className=' rightMarketSection'>
            <div className='rightMarketTitle'>
              <span>Filter</span>
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
              </Dropdown>
            </div>
            <div className='rightMarketCardContainer'>                
                {
                  mymintEditionData !== '' && sellingAllNftData !== '' ? 
                  sellingAllNftData.map((item, index) => {
                    return <div className='rightMarketMainCardList' key={index} >
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
                              <div>
                                <span>Price : {item.price}</span>
                              </div>
                              <div>
                                {
                                mymintEditionData.includes(item.id) ? <span> 내꺼 </span> : null
                                }
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
                              <div>
                                <span>Price : {item.price}</span>
                              </div>
                              <div>
                                {
                                mymintEditionData.includes(item.id) ? <span> 내꺼 </span> : null
                                }
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