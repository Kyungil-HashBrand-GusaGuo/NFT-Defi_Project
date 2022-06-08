import { setDataContract } from "../../caverConfig";
import axios from "axios";

function myMintingAction(account) {

    console.log("액션쪽주소", account)

    return async (dispatch) => {
        try {
            const response =  await setDataContract.methods.getTotalOwnedTokens(account).call()
            console.log("내민팅" ,response)

            // dispatch({type : "GET_MYMINTINGDATA", payload : {response}})
            // let [myMintingCount] = await Promise.all([MY_MINTING_COUNT])
        } 
        catch(error) {
            console.error(error)
        }
    }
}

export const mypageAction = {myMintingAction}