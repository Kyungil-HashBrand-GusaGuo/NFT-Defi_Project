import axios from "axios"

const pinataApi = axios.create({
    baseURL : "https://gateway.pinata.cloud/ipfs/QmaavyzfX6XzVNJx4zKCQVNDJWwQJx9xUC6gmDfddxvQ6p",
    headers : {'content-type' : "application/json"}
})

export default pinataApi