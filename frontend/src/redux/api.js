import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:9495/block",
    headers : {'content-type' : "application/json"}
})

export default api