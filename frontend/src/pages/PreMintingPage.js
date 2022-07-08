import React, { useEffect } from 'react'
import './PreMintingPage.css';
import { LeftMintingSection, RightMintingSection } from '../components'
import { useDispatch, useSelector } from 'react-redux';
import { mintingCount } from '../redux/actions/mintingCount';
import MintingModal from '../components/PreMintingpage/MintingModal';

const PreMintingPage = () => {

  const dispatch = useDispatch()

  const { whiteListCheck } = useSelector(state => state.account)
  const { premintdata, whitemintdata } = useSelector(state => state.mintdata)

  useEffect( () => {
    dispatch(mintingCount.mintCount())
  },[])

  return (
    <div className='mintingContainer'>
        <LeftMintingSection/>
        {
            whiteListCheck ? <RightMintingSection/> :
            <div className='whiteListText'>
                <h2>None permission to whitelist minting.</h2>
            </div> 
        }
        {
          premintdata ==='' ? null : <MintingModal premintdata={premintdata}/>
        }
        {
          whitemintdata ==='' ? null : <MintingModal whitemintdata={whitemintdata}/>
        }
    </div>
  )
}

export default PreMintingPage