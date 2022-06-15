import axios from "axios";

function stakingViewAct(account) {
    return async (dispatch) => {
        try {
            if(account !== ''){
                const test = await axios.post("http://34.64.61.199:9495/block/getExceptSellOwnedJolamanType", { account });
                console.log("뭐가뜰까",test)
            }

        } 
        catch(error) {
            console.error(error)
        }
    }
}

export const stakingViewAction = {stakingViewAct}