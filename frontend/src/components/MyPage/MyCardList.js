import React, { useState, useEffect } from 'react'
// import { MyCardList } from '../components'
import {RandomJolamanContract} from '../../caverConfig'
import { useSelector } from 'react-redux';
import './MyCardList.css'
import klayIcon2 from '../../images/klaytn.jpeg'

const MyCardList = () => {


    // const { premintdata } = useSelector(state => state.mindata);
    // console.log ("민트데이터",premintdata)
    const { account } = useSelector(state => state.account);
    // console.log(respon)

    const [showmint, setShowmint] = useState("");
    const ownedTokenId = async() => {
    const response = await RandomJolamanContract.methods.getTotalOwnedTokens(account).call()
    setShowmint(response);
    console.log("내민팅",response);
  }

  useEffect(()=> {
    ownedTokenId();
  },[account])

  return (
    <div className='myCardListContainer'>
        { showmint ===""? null : 
        showmint.slice(0).reverse().map((item, index)=>(
        <div className='cardListContainer'>
            <div className='myNftCard'
             style={{
                backgroundImage:
                    "url(" + 
                    ` https://gateway.pinata.cloud/ipfs/QmbqfWrFSDF5ieNB792KgwxdXr5AHDDRE8u47MvdaAJrpS/${item}.png` + 
                    ")"
            }}
            >
            </div>
            <div className='cardtxtContainer'>
                <div className='cardtxt'>
                    <div className='cardlisttitle'>
                        <p>Zolaman nft</p> 

                    </div>
                    <div className='cardlistname'>
                        <p>{item.name}</p>
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
        ))}
    </div>
  )
}

export default MyCardList