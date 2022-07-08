import axios from 'axios'

function timerGetAct() {
    return async (dispatch) => {
        try {
            const getDeleteRankingTable = await axios.get("http://localhost:9495/data/reset")
            console.log("ranking 삭제 완료")
        }
        catch(error) {
            console.error(error)
        }
    }
}

export const timerGetAction = {timerGetAct}