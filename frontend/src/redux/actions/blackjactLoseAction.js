import axios from "axios"; /* backend */
import api from "../api"; /* contracts */

function blackjackLoseAct(account, betPrice) {

    return async (dispatch) => {
        try {
            console.log("계정확인",account)
            console.log("배팅금액 확인",betPrice)
            console.log("짐")
            const response = await api.post("/block/blackjacklose", {account, betPrice});
            // const response = await api.post("/block/blackjacklose", {account, betPrice});

            if(response.status) {
                dispatch({
                    type: "LOSE_BLACKJACK_GAME",
                    payload: { loseBlackJackGame: true}
                })
            }
            
        } catch (error) {
            console.log(error);
        }
    }   
}

export const blackjackLoseAction = {blackjackLoseAct}