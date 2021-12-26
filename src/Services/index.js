import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://dev-jlmush.azurewebsites.net'
})

export default axiosInstance;