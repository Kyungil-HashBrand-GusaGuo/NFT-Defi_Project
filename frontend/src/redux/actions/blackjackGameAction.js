import api from "../api"; /* contracts */

function blackjackGameAct(title, bet) {
    console.log(title)
    console.log(bet)
    return async (dispatch) => {
        try {
            // console.log("계정확인",account)
            // console.log("total양 확인",total)
            // const response = await api.post("/block/blackjackgamereward", {account, total});

            // if(response.status) {
            //     dispatch({
            //         type: "CLEAR_BLACKJACK_GAME",
            //         payload: { clearBlackJackGame: true}
            //     })
            //     if(total) {
                    
            //     }
            // }
            
        } catch (error) {
            console.log(error);
        }
    }   
}

export const blackjackGameAction = {blackjackGameAct}