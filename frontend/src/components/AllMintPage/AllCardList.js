import React, { useEffect } from 'react'
import './AllCardList.css';
import { useDispatch, useSelector } from 'react-redux';
import { collectionAction } from '../../redux/actions/collectionAction';
import klayIcon2 from '../../images/klaytn.png'

const AllCardList = () => {

    const dispatch = useDispatch()

    const { allmintdata } = useSelector(state => state.mintdata)

    const revmintdata = [...allmintdata].reverse()
    console.log(revmintdata)

  useEffect(()=> {
    dispatch(collectionAction.collectionAct())
  },[])

  return (
    <>
    <div className='AllCradListContainer'>
        { revmintdata === "" ? null : 
        revmintdata.map((item, index)=>(
        <div className='cardListContainer' key={index}>
            <div className='myNftCard'
             style={{
                backgroundImage:
                    "url(https://sean95.s3.ap-northeast-2.amazonaws.com/raw/Zolaman/" + 
                    `${item.data.edition}` + 
                    ".png)"
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
    </>
  )
}

export default AllCardList