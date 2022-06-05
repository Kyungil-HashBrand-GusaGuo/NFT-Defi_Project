import { RandomJolamanContract } from "../../caverConfig";

function testMy(account) {

    console.log("액션쪽주소", account)

    return async (dispatch) => {
        try {
            //const response = await RandomJolamanContract.methods.getTotalOwnedTokens(account).call()
            
            const response = await RandomJolamanContract.methods.getTotalJolamanData(0).call()
            console.log("assdf" ,response)
            
        } 
        catch(error) {
            console.error(error)
        }
    }
}

export const test = {testMy}