import api from '../api'

function marketAct(account) {

    return async (dispatch) => {
        try {
            const response = await api.get("/block/getOnSaleJolaman");
            // console.log("판매중NFT", response.data)
            // console.log("NFT번호", response.data[0])
            // console.log("NFT가격", response.data[1])
         
            const idArr = response.data[0];
            const priceArr = response.data[1];
        
            let sellNftArr = [] 
            let sellIdArr = []

            for(let i=0; i < idArr.length; i++){ 
              let data = { id : Number(idArr[i]), price : (priceArr[i]/10**18).toFixed(1)} // 가격 1자리수로 남기고, 소주점2자리수에서 반올림
              sellNftArr.push(data)
              let id = Number(idArr[i])
              sellIdArr.push(id)
            }
            dispatch({type : "GET_ALL_SELL_NFT", 
            payload : { 
              sellingAllNftData : sellNftArr, 
              sellingNftId : sellIdArr,
              sellingNftPrice : priceArr
            }})

          } catch (error){
            console.error(error);
          }
    }
}

export const marketAction = {marketAct}