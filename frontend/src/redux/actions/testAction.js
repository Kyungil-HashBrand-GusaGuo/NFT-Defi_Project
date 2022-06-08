import axios from "axios"

function test(showmint) {

    return async (dispatch) => {
        try {
            console.log("액션쪽",showmint)
            const test = await showmint.map((item) => axios.get(`https://gateway.pinata.cloud/ipfs/QmQJGKnjHtgBeWRarsBHwK8uY7hsHoPJpuaPezBTrGac7K/${item}.json`))
            console.log(test)

          } catch (error){
            console.error(error);
          }
    }
}

export const testAction = {test}