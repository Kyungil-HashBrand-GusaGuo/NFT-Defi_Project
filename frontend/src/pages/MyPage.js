import React from 'react'
import './MyPage.css'
import { MyCardList } from '../components';

const MyPage = () => {

<<<<<<< HEAD
  const { account } = useSelector(state => state.account);



  // let account = "0xaC0d580B21118dB9Ea5d752d8950e9C2436575DE";
  const [showmint, setShowmint] = useState("");
  const ownedTokenId = async() => {
    const response = await RandomJolamanContract.methods.getTotalOwnedTokens(account).call()
    setShowmint(response);
    console.log("내민팅",response);
  }

  useEffect(()=> {
    ownedTokenId();
  },[account])
=======
>>>>>>> 83aba416c34e5633b4c85608912abd5140abf6d8

  return (
    <div className='myPageContainer'>
        <MyCardList/>
    </div>
  )
}

export default MyPage