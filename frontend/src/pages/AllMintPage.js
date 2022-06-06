import React, { useState, useEffect } from 'react'
import { RandomJolamanContract } from '../caverConfig'
import './AllMintPage.css';
import axios from "axios";

const AllMintPage = () => {

    const [showmint, setShowmint] = useState([]);
    const ownedTokenId = async() => {
    const response = await RandomJolamanContract.methods.getTotalJolamanData(0).call()
    const revresponse = [...response].reverse()
    setShowmint(revresponse);
    console.log("모든민팅",revresponse);
  }

  const metaDataURI = async() => {
    for(let i = 0; i < showmint.length; i++) {
      const response = await axios.get(`https://gateway.pinata.cloud/ipfs/QmQJGKnjHtgBeWRarsBHwK8uY7hsHoPJpuaPezBTrGac7K/${showmint[i]}.json`);
      console.log(response.data)
    }
  }
  metaDataURI()
  useEffect(()=> {
    ownedTokenId();
  },[])

  return (
    <div className='AllMintPageContainer'>
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

export default AllMintPage