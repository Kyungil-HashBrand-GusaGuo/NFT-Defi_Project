import React, { useState, useEffect } from 'react'
import { RandomJolamanContract } from '../../caverConfig'
import './AllCardList.css';
import klayIcon from '../../images/klaytn-klay-logo.png'
import axios from 'axios';


const AllCardList = () => {

    const [showmint, setShowmint] = useState("");
    const ownedTokenId = async() => {
    const response = await RandomJolamanContract.methods.getTotalJolamanData(0).call()
    console.log("모든민팅",response);

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
  },[])
  return (
    <div className='AllCradListContainer'>
        { showmint === "" ? null : 
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
                        <img className='klayicon' src={klayIcon}/><p>2.0</p>
                    </div>
                </div>
            </div> 
        </div>
        ))}
    </div>
  )
}

export default AllCardList