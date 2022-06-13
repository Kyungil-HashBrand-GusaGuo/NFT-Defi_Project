import {
    caver,
    RandomJolamanContract,
    MINT_CONTRACT_ADDRESS,
    SALE_CONTRACT_ADDRESS,
    setDataContract,
    SaleContract
  
  } from "../../caverConfig.js";


//const res = await setDataContract.methods.gettypeToId().call()

function sellAction(edition, account) {
    console.log(edition)
    console.log(account)
    return async (dispatch) => {
        console.log(edition)
        try {
            if(edition && account !== ""){
              const res = await setDataContract.methods.gettypeToId(167).call()
              console.log(edition)
              let tokenId = res;
              console.log("확인",res)
                  const response = await caver.klay.sendTransaction({
                  from: account,
                  to: MINT_CONTRACT_ADDRESS,
                  gas: "3000000",
                  data: RandomJolamanContract.methods.approve(MINT_CONTRACT_ADDRESS, tokenId).encodeABI()   
                  })
                  // 판매 등록 함수 판매 등록시 두번쨰 함수
                        console.log(response)
                        if(response.status) {
                          console.log("들어오나?")
                            //let price = 2
                            const SellNFT = async() => {
                                await caver.klay.sendTransaction({
                                  from: account,
                                  to: SALE_CONTRACT_ADDRESS,
                                  gas: "3000000",
                                  data: SaleContract.methods.SellJolamanToken(167, 2)
                                })
                              } 
                              SellNFT()
                            }
            }
                } catch(error) {
                console.error(error);
            }
    }
}

export const sellingAction = {sellAction}