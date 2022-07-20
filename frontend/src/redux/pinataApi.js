import axios from "axios"

const pinataApi = axios.create({
    baseURL : "https://gateway.pinata.cloud/ipfs/QmSYcEfrhJnYUtgqnF7wGcRoupQdwKNN5ioSnbMSuK2LSx",
    headers : {'content-type' : "application/json"}
})

export default pinataApi