import React, { useEffect } from 'react'
import './PreMintingPage.css';
import { LeftMintingSection, RightMintingSection } from '../components'
import { useDispatch, useSelector } from 'react-redux';
import { mintingCount } from '../redux/actions/mintingCount';

const PreMintingPage = () => {

  const dispatch = useDispatch()

  const { whiteListCheck } = useSelector(state => state.account)


  useEffect( () => {
    dispatch(mintingCount.mintCount())
  },[])

  return (
    <div className='mintingContainer'>
        <LeftMintingSection/>
        {
            whiteListCheck ? <RightMintingSection/> :
            <div className='whiteListText'>
                <h1>화이트리스트 민팅 권한이 없습니다.</h1>
            </div> 
        }
    </div>
  )
}

export default PreMintingPage