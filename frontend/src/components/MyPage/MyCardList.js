import React, { useEffect } from 'react';
import './MyCardList.css';
import { Test } from '../../images'
import { useDispatch, useSelector } from 'react-redux';
import { mypageAction } from '../../redux/actions/mypageAction';

const MyCardList = () => {

    const dispatch = useDispatch();
    const { mintdata } = useSelector(state => state.mintdata);
    const { account } = useSelector(state => state.account);
    const { mymintdata } = useSelector(state => state.mymintdata); // reducer/index.js 안의 mymintdata
    
    // https://gateway.pinata.cloud/ipfs/QmbqfWrFSDF5ieNB792KgwxdXr5AHDDRE8u47MvdaAJrpS/489.png
    // https://gateway.pinata.cloud/ipfs/QmbqfWrFSDF5ieNB792KgwxdXr5AHDDRE8u47MvdaAJrpS/553.png

    // console.log("여기", account)
    // console.log("mint데이터", mintdata)


    useEffect( () => {
        dispatch(mypageAction.myMintingAction(account))
    })

  return (
    <div className='cardListContainer'>
        <div className='myNftCard'
         style={{
            backgroundImage:
                "url(" + 
                ` https://gateway.pinata.cloud/ipfs/QmbqfWrFSDF5ieNB792KgwxdXr5AHDDRE8u47MvdaAJrpS/553.png` + 
                // ` https://gateway.pinata.cloud/ipfs/QmbqfWrFSDF5ieNB792KgwxdXr5AHDDRE8u47MvdaAJrpS/553.png` + 
                ")"
        }}
        >
            {/* <img src={Test}></img> */}
        </div> 
        <div className='cardlisttxt'>
            <div className='cardlisttitle'>
                <p>Zolaman nft</p>
                <p>Zolaman nft </p>
            </div>
            <div className='cardlistprice'>
                <p>$1234</p>
                <p>price</p>
            </div>
        
            
        </div> 
                <p>지갑주소 : {account}</p>
        {/* <div className='cardlisttxt2'>
            <div className='cardlistprice'>
                <b>$1234</b>
            </div>
            <div className='cardlisttxtprice'>
                <b>price</b>
            </div>
        </div> */}
    </div>
    
  )
}

export default MyCardList