import axios from "axios"; /* backend */
import api from "../api"; /* contracts */

function blackjackWinAct(account, betPrice) {

    return async (dispatch) => {
        try {
            console.log("계정확인",account)
            console.log("배팅금액 확인",betPrice)
            console.log("이김")
            const response = await api.post("/block/blackjackwin", {account, betPrice});

            if(response.status) {
                dispatch({
                    type: "WIN_BLACKJACK_GAME",
                    payload: { winBlackJackGame: true}
                })

                if(betPrice > 0) {
                    return dispatch ({
                        type : "GET_BLACKJACK_GAME_REWARD",
                        payload : { blackjackRewardGZLT: 5 }
                    })
                }

                if(betPrice == 0) {
                    return dispatch ({
                        type: "GET_BLACKJACK_GAME_REWARD",
                        payload : { blackjackRewardGZLT : 3 }
                    })
                }
                
                if(betPrice < 0 ) {
                    return dispatch ({
                        type: "GET_BLACKJACK_GAME_REWARD",
                        payload : { blackjackRewardGZLT : 2 }
                    })
                }
            }
            
        } catch (error) {
            console.log(error);
        }
    }   
}

export const blackjackwinAction = {blackjackWinAct}