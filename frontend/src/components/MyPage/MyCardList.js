import React, { useState, useEffect } from 'react'
// import { MyCardList } from '../components'
import {RandomJolamanContract} from '../../caverConfig'
import { useSelector } from 'react-redux';
import './MyCardList.css'
import klayIcon2 from '../../images/klaytn.jpeg'
import axios from 'axios';

const MyCardList = () => {

    const { account } = useSelector(state => state.account);

    const [showmint, setShowmint] = useState("");

    const ownedTokenId = async() => {
    const response = await RandomJolamanContract.methods.getTotalOwnedTokens(account).call()
    console.log("내민팅",response);

    let array = []

    for(let i=0; i < response.length; i++){
        
        const mintJSON = await axios.get(`https://gateway.pinata.cloud/ipfs/QmQJGKnjHtgBeWRarsBHwK8uY7hsHoPJpuaPezBTrGac7K/${response[i]}.json`)
        // console.log(mintJSON)
        // console.log(mintJSON.data.name)
        array.push(mintJSON)
    }
    setShowmint(array);
  }

  useEffect(()=> {
    ownedTokenId();
  },[account])

  return (
    <div className='myCardListContainer'>
        { showmint === "" ? null : 
        //.slice(0).reverse()
        showmint.reverse().map((item, index)=>(
        <div className='cardListContainer' key={index}>
            <div className='myNftCard'
             style={{
                backgroundImage: 
                    "url(" + 
                    `${item.data.image}` + 
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
                        <p>{item.data.name}</p>
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