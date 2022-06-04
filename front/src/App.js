import './App.css';
import { useEffect, useState } from "react";
import { caver, mintTokenContract, MINT_CONTRACT_ADDRESS } from "./caverConfig.js";



function App() {
  const val = 1;
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

  const onClickMint = async() => {
    try {
      const response = await caver.klay.sendTransaction({
        type: "SMART_CONTRACT_EXECUTION",
        from: account,
        to: MINT_CONTRACT_ADDRESS,
        value: caver.utils.convertToPeb(val, "KLAY"),
        gas: "3000000",
        data: mintTokenContract.methods.mintGemToken().encodeABI(),
      })
      console.log(response);
    } catch (error){
      console.error(error);
    }
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
    <button onClick={onClickMint}>MINT</button>
    </div>
    
  );
}

export default App;
