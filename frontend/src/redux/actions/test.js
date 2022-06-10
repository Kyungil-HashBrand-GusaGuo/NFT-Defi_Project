
function testAction(edition, account) {

    return async (dispatch) => {
        try {
            console.log(edition)
            console.log(account)



          } catch (error){
            console.error(error);
          }
    }
}

export const test = {testAction}