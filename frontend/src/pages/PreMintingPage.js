import React, { useEffect, useState } from 'react'
import './PreMintingPage.css';
import { LeftMintingSection, RightMintingSection } from '../components'
import { useDispatch } from 'react-redux';

const PreMintingPage = () => {

  const dispatch = useDispatch()

  const [test, setTest] = useState(true)

  useEffect( () => {
    dispatch()
  },[])

  return (
    <div className='mintingContainer'>
        <LeftMintingSection/>
        {
            test ? <RightMintingSection/> :
            <div className='whiteListText'>
                <h1>화이트리스트 민팅 권한이 없습니다.</h1>
            </div> 
        }
    </div>
  )
}

export default PreMintingPage