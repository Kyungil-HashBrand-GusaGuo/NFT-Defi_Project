import api from "../api"; /* contracts */

function blackjackGameAct(account, betPrice) {
    console.log(account)
    console.log(betPrice)
    return async (dispatch) => {
        try {
            console.log("계정확인",account)
            console.log("배팅금액 확인",betPrice)
            console.log("이김")
            const response = await api.post("/block/blackjackwin", {account, betPrice});
            const response2 = await api.post("/block/blackjacklose", {account, betPrice});

            if(response.status) {
                dispatch({
                    type: "WIN_BLACKJACK_GAME",
                    payload: { winBlackJackGame: true}
                })
            }
            if(response2.status) {
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

export const blackjackGameAction = {blackjackGameAct}