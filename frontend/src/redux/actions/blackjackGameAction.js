import axios from "axios"; /* backend */
import api from "../api"; /* contracts */

function blackjackGameAct(account, total) {
    return async (dispatch) => {
        try {
            console.log("계정확인",account)
            console.log("total양 확인",total)
            
        } catch (error) {
            console.log(error);
        }
    }   
}