import {
    caver,
    SALE_CONTRACT_ADDRESS,
    SaleContract
  
  } from "../../caverConfig.js";

function cancelSellAction(edition, account) {
    console.log(edition)
    console.log(account)
    return async (dispatch) => {
        console.log(edition)
        try {
            if(edition && account !== ""){
                const response = await caver.klay.sendTransaction({
                    from: account,
                    to: SALE_CONTRACT_ADDRESS,
                    gas: "3000000",
                    data: SaleContract.methods.cancleSellJolamnaToken(edition).encodeABI()
                })
                console.log(response);
                dispatch({type:"CANCEL_SELL_NFT", payload : {sellingNftCancel : true}})
            }
                } catch(error) {
                console.error(error);
                window.location.reload()
            }
    }
}

export const cancelSellingAction = {cancelSellAction}