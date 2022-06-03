import './App.css';
import { useEffect, useState } from "react";
import { mintTokenContract } from "./caverConfig.js";



function App() {
  const [account, setAccount] = useState("");

  const getAccount = async() => {
    try {
      const accounts = await window.klaytn.enable();
      console.log(accounts)
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

  // useEffect(() => {
  //   if(window.klaytn) {
  //     setCaver(Caver(window.klaytn))
  //   }
  // }, []);

  // useEffect(() => {
  //   if(!caver) return;
  //   setMintTokenContract(caver.contract.create(MINT_CONTRACT_ADDRESS, MINT_CONTRACT_ABI));
  // }, [caver]);


    // useEffect(() => console.log(caver), [caver]);
    // useEffect(() => console.log(mintTokenContract), [mintTokenContract])

  const test = async() => {
    const response = await mintTokenContract.methods.totalSupply().call();
    console.log(response);
  }

  const test2 = async() => {
    const response = await mintTokenContract.methods.balanceOf(account).call();
    console.log(response)
  }


  useEffect(() => {
    test();
    test2();
  },[account])
 

  return (
    <div>
    <h2>account : </h2>
    <br />
    <h2>{account}</h2>
    <br />
    <h2>balance : </h2>
    <br />
    </div>
    
  );
}

export default App;
