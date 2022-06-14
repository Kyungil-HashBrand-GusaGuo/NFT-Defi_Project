import { RandomJolamanContract, MINT_CONTRACT_ADDRESS, setDataContract } from "../../ropstenConfig";
import { ethers } from "ethers";
import axios from "axios";

function preMintAction(account) {

  // console.log(setDataContract.getTotalOwnedTokens(account))
  return async (dispatch) => {
    try {
      // const response = await window.ethereum.sendTransaction({
      //   from: account,
      //   to: MINT_CONTRACT_ADDRESS,
      //   value: ethers.utils.formatEther(2, "Ether"),
      //   gas: "3000000",
      //   data: RandomJolamanContract.payandMint().encodeABI(),
      // })
      // await window.ethereum.enable()
      // console.log(RandomJolamanContract().then(e => console.log(e.totalSupply().then(f => console.log(f)))))
      const contract1 = await RandomJolamanContract();
      const response = await contract1.payandMint({
        from: account,
        value: ethers.BigNumber.from("200000000000000000")
      });

      console.log("if문 전", response)
      if (response.status) {
        const contract2 = await setDataContract();
        const response = await contract2.getTotalOwnedTokens(account);
        let metaDataURI = response[response.length - 1];
        const getMetaData = async () => {
          const response = await axios.get(`https://gateway.pinata.cloud/ipfs/QmQJGKnjHtgBeWRarsBHwK8uY7hsHoPJpuaPezBTrGac7K/${metaDataURI}.json`);
          console.log("if문 안", response.data)
          dispatch({ type: "GET_PRE_MINTDATA", payload: { premintdata: response.data } })
        }
        getMetaData();
      }

    } catch (error) {
      console.error(error);
    }
  }
}

export const preMintingAction = { preMintAction }