import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import klayIcon2 from '../images/klaytn.png';
//import './BuyPage.css'
import { BuyModal } from '../components';
import { TbArrowBack } from "react-icons/tb";
import pinataApi from '../redux/pinataApi';


const BuyPage = () => {

    const navigate = useNavigate()
    let {edition} = useParams()
    const [sellNftPrice, setSellNftPrice] = useState()
    const [buyModal, setBuyModal] = useState(false)
    const [showMint, setShowMint] = useState();
    const { account } = useSelector(state => state.account)
    const { sellingAllNftData } = useSelector(state => state.transactionNFT)

    
    const callBuyNft = async() => {
        const mintJSON = await pinataApi.get(`/${edition}.json`)
        setShowMint(mintJSON.data);

        for(let i=0; i < sellingAllNftData.length; i++){
            if(sellingAllNftData[i].id == edition){
                setSellNftPrice(sellingAllNftData[i].price)
            }
        }
    }

    const changeBuyModalState = () => {
        setBuyModal(true)
      }

    const previousPage = () => {
      navigate(`/market`)
    }

    useEffect (() => {
        callBuyNft()
    },[])

  return (
    <>
    {
        buyModal ? <BuyModal edition={edition} account={account} /> : null
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
              <div>
              </div>
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
                        <p>BUY NFT</p>
                      </div>
                    </div>
                    <div className='leftbtn'>
                      <button onClick={changeBuyModalState} className="learn-more">Buy Now</button>
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

                        <div className='rightCardTxt'>
                          <div className='rightCardListTitle'>
                          <p>Price </p>
                          </div>
                          <div className='rightCardListPrice'>
                              <img className='klayicon' src={klayIcon2}/><p>{sellNftPrice}</p>
                          </div>
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
  </>
  )
}

export default BuyPage