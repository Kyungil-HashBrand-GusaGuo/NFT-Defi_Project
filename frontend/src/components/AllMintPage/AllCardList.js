import React, { useState, useEffect } from 'react'
import { RandomJolamanContract } from '../../caverConfig'
import './AllCardList.css';
import klayIcon from '../../images/klaytn-klay-logo.png'


const AllCardList = () => {

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
    <div className='AllCradListContainer'>
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
                        <p>Zola Man #{item}</p>
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