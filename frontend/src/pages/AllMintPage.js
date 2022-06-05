import React, { useState, useEffect } from 'react'
import { RandomJolamanContract } from '../caverConfig'
import './AllMintPage.css';

const AllMintPage = () => {

    const [showmint, setShowmint] = useState("");
    const ownedTokenId = async() => {
    const response = await RandomJolamanContract.methods.getTotalJolamanData(0).call()
    setShowmint(response);
    console.log("모든민팅",response);
  }

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