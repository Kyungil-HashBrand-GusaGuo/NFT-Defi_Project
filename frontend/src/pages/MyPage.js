import React, { useState, useEffect } from 'react'
// import { MyCardList } from '../components'
import {RandomJolamanContract} from '../caverConfig'
import { useSelector } from 'react-redux';
import './MyPage.css'

const MyPage = () => {

  // const { account } = useSelector(state => state.account);
  // console.log("acccouuunntt", account)


  let account = "0xaC0d580B21118dB9Ea5d752d8950e9C2436575DE";
  const [showmint, setShowmint] = useState("");
  const ownedTokenId = async() => {
    const response = await RandomJolamanContract.methods.getTotalOwnedTokens(account).call()
    setShowmint(response);
    console.log("내민팅",response);
  }

  useEffect(()=> {
    ownedTokenId();
  },[])

  return (
    <div className='myPageContainer'>
        { showmint ===""? null : 
        showmint.map((item, index)=>(
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
            <div className='cardlisttxt'>
                <div className='cardlisttitle'>
                    <p>Zolaman nft</p>
                    <p>Zolaman nft </p>
                </div>
                <div className='cardlistprice'>
                    <p>{item}</p>
                    <p>price</p>
                </div>
            </div> 
        </div>
        ))}
    </div>
  )
}

export default MyPage