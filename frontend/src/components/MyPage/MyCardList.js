import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './MyCardList.css'
import klayIcon2 from '../../images/klaytn.png'
import { mypageAction } from '../../redux/actions/mypageAction';

const MyCardList = () => {

    const dispatch = useDispatch()
    const { account } = useSelector(state => state.account);
    const { mymintdata } = useSelector(state => state.mintdata)

    console.log(mymintdata)

  useEffect(()=> {
    dispatch(mypageAction.mypageAct(account))
  },[account])

  return (
    <div className='myCardListContainer'>
        { mymintdata === "" ? null : 
        mymintdata.reverse().map((item, index)=>(
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