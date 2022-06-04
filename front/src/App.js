import './App.css';
import { useEffect, useState } from "react";
import { caver, RandomJolamanContract, MINT_CONTRACT_ADDRESS } from "./caverConfig.js";
import axios from "axios";



function App() {
  const val = 2;
  const klaytn = 10 ** 18;
  const testAccount = "0x663C6cBA85bA17d949F9d14232bDAEE5b543Bac0"
  const [account, setAccount] = useState("");
  const [myBalance, setMyBalance] = useState(0);
  const [Whitelist, setWhitelist] = useState("");
  const [myTokenId, setMyTokenId] = useState([]);
  // const [metaDataURI, setMetaDataURI] = useState(undefined);


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

  const test = async() => {
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
          const response = await axios.get(`https://gateway.pinata.cloud/ipfs/QmZ9QKfGeqLjNjaiHa2tcwsGyRDDUc85ZkoUzMWuPohajc/${metaDataURI}.json`);
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

  // 보유 토큰ID 조회 
  const ownedTokenId = async() => {
    const response = await RandomJolamanContract.methods.getTotalOwnedTokens(account).call()
    setMyTokenId(response);
  }

  // 보유 klay 조회

  const BalanceKlay = async() => {
    const response = await RandomJolamanContract.methods.getBalance(account).call()
    setMyBalance(response);
  }



  

  useEffect(() => {
    test();
    ownedTokenId();
    BalanceKlay();
  },[account])

  const myBalanceForKlay = (myBalance / klaytn).toFixed(3);

  console.log(account)
  console.log(Whitelist);
  console.log(myTokenId);
  console.log(myBalanceForKlay);

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
