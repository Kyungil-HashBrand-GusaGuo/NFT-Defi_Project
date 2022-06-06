import './App.css';
import { useEffect, useState } from "react";
import { caver, RandomJolamanContract, MINT_CONTRACT_ADDRESS } from "./caverConfig.js";
import axios from "axios";



function App() {
  const val = 2;
  const klaytn = 10 ** 18;
  const testAccount = "0x24Cd3020691814062Dfa1310613b426851fe628B"
  const [account, setAccount] = useState("");
  const [myBalance, setMyBalance] = useState(0);
  const [Whitelist, setWhitelist] = useState("");
  const [myTokenId, setMyTokenId] = useState([]);
  const [maxNormal, setMaxNormal] = useState("");
  const [maxSpecial, setMaxSpecial] = useState("");
  const [currentNormal, setCurrentNormal] = useState("");
  const [currentSpecial, setCurrentSpecial] = useState("");



  const getAccount = async() => {
    try {
      const accounts = await window.klaytn.enable();
      setAccount(accounts[0]);
    } catch(error) {
      console.error(error);
    }  
  }


  useEffect(() => {
    if(window.klaytn) {
      getAccount();
    }
  }, []);

  const isWhiteList = async() => {
    const response = await RandomJolamanContract.methods.isWhiteList(account).call();
    setWhitelist(response);
  }


  // 일반 민팅 
  const onClickMint = async() => {
    try {
      const response = await caver.klay.sendTransaction({
        from: account,
        to: MINT_CONTRACT_ADDRESS,
        value: caver.utils.convertToPeb(val, "KLAY"),
        gas: "3000000",
        data: RandomJolamanContract.methods.payandMint().encodeABI(),
      })
      if(response.status) {
        const response = await RandomJolamanContract.methods.getLatestJolamanData().call()
        let metaDataURI = response; 
        const getMetaData = async() => {
          const response = await axios.get(`https://gateway.pinata.cloud/ipfs/QmQJGKnjHtgBeWRarsBHwK8uY7hsHoPJpuaPezBTrGac7K/${metaDataURI}.json`);
          console.log(response.data)         
        }
        getMetaData();
      }
    } catch (error){
      console.error(error);
    }
  }

  // whiteList 민팅 함수
  const onClickSpecialMint = async() => {
    try {
      const response = await caver.klay.sendTransaction({
        from: account,
        to: MINT_CONTRACT_ADDRESS,
        value: caver.utils.convertToPeb(val, "KLAY"),
        gas: "3000000",
        data: RandomJolamanContract.methods.specialPayandMint().encodeABI(),
      })
      if(response.status) {
        const response = await RandomJolamanContract.methods.getLatestJolamanData().call()
        let metaDataURI = response; 
        const getMetaData = async() => {
          const response = await axios.get(`https://gateway.pinata.cloud/ipfs/QmZ9QKfGeqLjNjaiHa2tcwsGyRDDUc85ZkoUzMWuPohajc/${metaDataURI}.json`);
          console.log(response.data)         
        }
        getMetaData();
      }
    } catch (error){
      console.error(error);
    }
  }

// 화이트리스트 추가
  const onClickaddWhiteList = async() => {
    try {
      const response = await caver.klay.sendTransaction({
        from: account,
        to: MINT_CONTRACT_ADDRESS,
        gas: "3000000",
        data: RandomJolamanContract.methods.addWhiteList(testAccount).encodeABI(),
      });
      console.log(response)
    } catch(error) {
      console.error(error);
    }
  }

  // 화이트리스트 삭제
  const onClickRemoveWhiteList = async() => {
    try {
      const response = await caver.klay.sendTransaction({
        from: account,
        to: MINT_CONTRACT_ADDRESS,
        gas: "3000000",
        data: RandomJolamanContract.methods.removeWhiteList(testAccount).encodeABI(),
      });
      console.log(response)
    } catch(error) {
      console.error(error);
    }
  }

  // 보유 토큰 졸라맨 타입 조회 
  const ownedTokenId = async() => {
    const response = await RandomJolamanContract.methods.getTotalOwnedTokens(account).call()
    setMyTokenId(response);
  }

  // 보유 klay 조회

  const BalanceKlay = async() => {
    const response = await RandomJolamanContract.methods.getBalance(account).call()
    setMyBalance(response);
  }

  // normal Token 총 발행량
  const MAX_NORMAL_TOKEN_COUNT = async() => {
    const response = await RandomJolamanContract.methods.MAX_NORMAL_TOKEN_COUNT().call()
    setMaxNormal(response);
  }

  // special Token 총 발행량
  const MAX_SPECIAL_TOKEN_COUNT = async() => {
    const response = await RandomJolamanContract.methods.MAX_SPECIAL_TOKEN_COUNT().call()
    setMaxSpecial(response);
  }

  // 현재 normal Token 발행된 갯수
  const CURRENT_NORMAL_TOKEN_COUNT = async() => {
    const response = await RandomJolamanContract.methods._normalTokenIdCount().call()
    setCurrentNormal(response);
  }

  // 현재 special Token 발행된 갯수
  const CURRENT_SPECIAL_TOKEN_COUNT = async() => {
    const response = await RandomJolamanContract.methods._specialTokenIdCount().call()
    setCurrentSpecial(response);
  }

  useEffect(() => {
    MAX_NORMAL_TOKEN_COUNT()
    MAX_SPECIAL_TOKEN_COUNT()
    CURRENT_NORMAL_TOKEN_COUNT()
    CURRENT_SPECIAL_TOKEN_COUNT()
  },[])


  useEffect(() => {
    isWhiteList();
    ownedTokenId();
    BalanceKlay();
  },[account])

  const myBalanceForKlay = (myBalance / klaytn).toFixed(3);

  console.log(account)
  console.log(Whitelist);
  console.log(myTokenId);
  console.log(myBalanceForKlay);
  console.log(maxNormal)
  console.log(maxSpecial)
  console.log(currentNormal)
  console.log(currentSpecial)

  return (
    <div>
    <h2>account : </h2>
    <br />
    <h2>{account}</h2>
    <br />
    <h2>Balance : </h2>
    <br />
    <h2>{myBalanceForKlay} KLAY</h2>
    <button onClick={onClickMint}>MINT</button>
    <button onClick={onClickSpecialMint}>SpecialMINT</button>
    <br />
    <button onClick={onClickaddWhiteList}>addWhiteList</button>
    <button onClick={onClickRemoveWhiteList}>RemoveWhiteList</button>
    </div>
    
  );
}

export default App;