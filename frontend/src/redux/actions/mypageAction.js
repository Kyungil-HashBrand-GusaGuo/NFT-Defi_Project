import {  RandomJolamanContract } from "../../caverConfig";
// import axios from "axios";

function myMintingAction(account) {

    return async (dispatch) => {
        try {
            const response = await RandomJolamanContract.methods.getTotalOwnedTokens(account).call()
            // setMyTokenId(response);
            console.log("dsfdsfdsfs",response);
            dispatch({type : "GET_MYMINTINGDATA", payload : {response}})
        } 
        catch(error) {
            console.error(error)
        }
    }
    
}

export const mypageAction = {myMintingAction}