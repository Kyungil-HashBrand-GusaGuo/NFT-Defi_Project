import {
    caver,
    RandomJolamanContract,
    MINT_CONTRACT_ADDRESS,
    SALE_CONTRACT_ADDRESS,
    setDataContract,
    SaleContract
  
  } from "../../caverConfig.js";


//const res = await setDataContract.methods.gettypeToId().call()

function sellAction(edition, account, price) {
    console.log(edition)
    console.log(account)
    console.log(price)
    return async (dispatch) => {
        //onsole.log(edition)
        try {
            if(edition && account !== ""){
              const res = await setDataContract.methods.gettypeToId(edition).call()
              //console.log(edition)
              let tokenId = res;
              //console.log("확인",res)
                  const response = await caver.klay.sendTransaction({
                  from: account,
                  to: MINT_CONTRACT_ADDRESS,
                  gas: "3000000",
                  data: RandomJolamanContract.methods.approve(SALE_CONTRACT_ADDRESS, tokenId).encodeABI()   
                  })
                  // 판매 등록 함수 판매 등록시 두번쨰 함수
                        console.log(response)
                        if(response.status) {
                          console.log("들어오나?")
                            //let price = 2
                            console.log("계정확인",account)
                            const SellNFT = async() => {
                               const response = await caver.klay.sendTransaction({
                                  from: account,
                                  to: SALE_CONTRACT_ADDRESS,
                                  gas: "3000000",
                                  data: SaleContract.methods.SellJolamanToken(edition, price).encodeABI()
                                })
                              } 
                              SellNFT()
                            }
                          }
                          dispatch({type:"SUCCESS_SELL_NFT", payload : {sellingNftSuccess : true}})
                } catch(error) {
                console.error(error);
            }
    }
}

export const sellingAction = {sellAction}