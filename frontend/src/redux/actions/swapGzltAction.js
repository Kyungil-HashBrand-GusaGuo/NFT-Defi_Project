import { caver, GAME_CONTRACT_ADDRESS, GameContract } from "../../caverConfig";

function swapGzltAct(account,amount) {
    
    console.log(account)
    console.log(amount)
    
    return async (dispatch) => {
        try {
            const response = await caver.klay.sendTransaction({
                from: account,
                to: GAME_CONTRACT_ADDRESS,
                gas: "3000000",
                data: GameContract.methods.TokenToKlay(amount).encodeABI()
            })
            console.log(response);

            //일단 이부분은 stakingReducer로 보내고있음
            dispatch({
              type: "SUCCESS_GZLT_SWAP",
              payload: { swapGzltSuccess: true }
            })
          } catch (error){
            console.error(error);
          }
    }
}

export const swapGzltAction = {swapGzltAct}