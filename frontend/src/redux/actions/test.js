import {
    caver,
    RandomJolamanContract,
    MINT_CONTRACT_ADDRESS,
    SALE_CONTRACT_ADDRESS,
    setDataContract,
    SaleContract
  
  } from "../../caverConfig.js";


function testAction(edition, account) {

    return async (dispatch) => {
        try {
            const res = await setDataContract.methods.gettypeToId(edition).call()
            let tokenId = res;
                const response = await caver.klay.sendTransaction({
                from: account,
                to: MINT_CONTRACT_ADDRESS,
                gas: "3000000",
                data: RandomJolamanContract.methods.approve(MINT_CONTRACT_ADDRESS, tokenId).encodeABI()   
                })
          // 판매 등록 함수 판매 등록시 두번쨰 함수
                if(response.status) {
                    let price = 2
                    const SellNFT = async(edition, price) => {
                        await caver.klay.sendTransaction({
                          from: account,
                          to: SALE_CONTRACT_ADDRESS,
                          gas: "3000000",
                          data: SaleContract.methods.SellJolamanToken(edition, price)
                        })
                      } 
                      SellNFT()
                    }
                } catch(error) {
                console.error(error);
            }
    }
}

export const test = {testAction}