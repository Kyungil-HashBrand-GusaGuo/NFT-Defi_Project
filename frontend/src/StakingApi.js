import "./App.css";
import { useEffect, useState } from "react";
import {
  caver,
  RandomJolamanContract,
  MINT_CONTRACT_ADDRESS,
  SALE_CONTRACT_ADDRESS,
  setDataContract,
  SaleContract,
  STAKING_CONTRACT_ADDRESS,
  StakingContract

} from "./caverConfig.js";


// 관리자 페이지 스테이킹 시스템 실행전 필수로 눌러줘야 스테이킹 기능 작동
const initStaking = async(account) => {
    try {
        const response = await caver.klay.sendTransaction({
            from: account,
            to: STAKING_CONTRACT_ADDRESS,
            gas: "3000000",
            data: StakingContract.methods.initStaking().encodeABI()
        })
        console.log(response);
    } catch(error) {
        console.error(error);
    }
} 


// 스테이킹 함수

const Approval = async(edition, account) => {
    try {
      const res = await setDataContract.methods.gettypeToId(edition).call()
      let tokenId = res;
      const response = await caver.klay.sendTransaction({
      from: account,
      to: MINT_CONTRACT_ADDRESS,
      gas: "3000000",
      data: RandomJolamanContract.methods.approve(STAKING_CONTRACT_ADDRESS, tokenId).encodeABI()   
      })
      if(response.status) {
        const response = await caver.klay.sendTransaction({
            from: account,
            to: STAKING_CONTRACT_ADDRESS,
            gas: "3000000",
            data: StakingContract.methods.stake(edition).encodeABI()
        })
      }
    } catch(error){console.error(error)}
}

// 스테이킹 해제 함수

const unstake = async(edition, account) => {
    try {
        const response = await caver.klay.sendTransaction({
            from: account,
            to: STAKING_CONTRACT_ADDRESS,
            gas: "3000000",
            data: StakingContract.methods.unstake(edition).encodeABI()
        })
        console.log(response);
    } catch(error) {
        console.error(error);
    }
} 

// 쌓인 보상 청구 함수

const claimReWard = async(account) => {
    try {
        const response = await caver.klay.sendTransaction({
            from: account,
            to: STAKING_CONTRACT_ADDRESS,
            gas: "3000000",
            data: StakingContract.methods.claimReward(account).encodeABI()
        })
        console.log(response);
    } catch(error) {
        console.error(error);
    }
}

// 판매등록X 스테이킹X 나의 NFT목록 (배열)
router.post("/getExceptSellOwnedJolamanType", setController.getExceptSellOwnedJolamanType);

// 스테이킹된 나의 모든 NFT
router.post("/stakedJolaman", stakeController.getOwnedStakedJolamanType);

// 스테이킹 보상
router.post("/updateReward", stakeController.updateReward);

// 지금 내가 받은 총 보상
router.post("/stakers", stakeController.stakers);

// 어드민페이지 주소값
router.get("/getOwner", setController.getOwner);