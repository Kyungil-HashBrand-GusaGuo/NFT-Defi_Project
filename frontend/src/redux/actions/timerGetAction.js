import api from "../api"

function timerGetAct() {
    return async (dispatch) => {
        try {
            const getDeleteRankingTable = await api.get("/data/reset")
            // console.log("ranking 삭제 완료")
        }
        catch(error) {
            console.error(error)
        }
    }
}

export const timerGetAction = {timerGetAct}