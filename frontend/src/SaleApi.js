import "./App.css";
import { useEffect, useState } from "react";
import {
  caver,
  RandomJolamanContract,
  MINT_CONTRACT_ADDRESS,
  SALE_CONTRACT_ADDRESS,
  setDataContract,
  SaleContract

} from "./caverConfig.js";
import axios from "axios";

// 승인권한 요청 함수 판매등록 시 첫번쨰 함수

  const Approval = async(_JolamanType, account) => {
      try {
    const res = await setDataContract.methods.gettypeToId(_JolamanType).call(_JolamanType)
    let tokenId = res;
        const response = await caver.klay.sendTransaction({
        from: account,
        to: MINT_CONTRACT_ADDRESS,
        gas: "3000000",
        data: RandomJolamanContract.methods.approve(MINT_CONTRACT_ADDRESS, tokenId).encodeABI()   
        })
  // 판매 등록 함수 판매 등록시 두번쨰 함수
        if(response.status) {
            const SellNFT = async(_JolamanType, _price) => {
                await caver.klay.sendTransaction({
                  from: account,
                  to: SALE_CONTRACT_ADDRESS,
                  gas: "3000000",
                  data: SaleContract.methods.SellJolamanToken(_JolamanType, _price)
                })
              } 
              SellNFT()
            }
        } catch(error) {
        console.error(error);
    }
}


// 판매 등록 취소 함수

const cancelSellNFT = async(_JolamanType, account) => {
    try {
        const response = await caver.klay.sendTransaction({
            from: account,
            to: SALE_CONTRACT_ADDRESS,
            gas: "3000000",
            data: SaleContract.methods.cancleSellJolamnaToken(_JolamanType).encodeABI()
        })
        console.log(response);
    } catch(error) {
        console.error(error);
    }
} 

// 구매 함수

const buyNFT = async(_JolamanType, account) => {
    try {
        const price = await SaleContract.methods.sellingJolamanTypeToPrice(_JolamanType).call()
        const response = await caver.klay.sendTransaction({
            from: account,
            to: SALE_CONTRACT_ADDRESS,
            value: caver.utils.convertToPeb(price, "KLAY"),
            gas: "3000000",
            data: SaleContract.methods.buyJolamanToken(_JolamanType).encodeABI()
        }) 
    }
    catch(error) {
        console.error(error);
    }
}
