import {
    caver,
    RandomJolamanContract,
    MINT_CONTRACT_ADDRESS,
    SALE_CONTRACT_ADDRESS,
    setDataContract,
    SaleContract
  
  } from "../../caverConfig.js";


//const res = await setDataContract.methods.gettypeToId().call()

function buyAction(edition, account) {
    return async (dispatch) => {
        console.log(edition)
        console.log(account)
        try {
            if(edition && account !== ""){
                const basicPrice = await SaleContract.methods.sellingJolamanTypeToPrice(edition).call()
                let price = basicPrice / 10**18
                console.log(price)
                const response = await caver.klay.sendTransaction({
                    from: account,
                    to: SALE_CONTRACT_ADDRESS,
                    value: caver.utils.convertToPeb(price, "KLAY"),
                    gas: "3000000",
                    data: SaleContract.methods.buyJolamanToken(edition).encodeABI()
                })
                console.log(response)             
                dispatch({type:"SUCCESS_BUY_NFT", payload : {buyingNftSuccess : true}})
            }
            } catch(error) {
                console.error(error);
                window.location.reload()
            }
    }
}

export const buyingAction = {buyAction}