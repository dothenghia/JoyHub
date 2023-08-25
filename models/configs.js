import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://timely-chebakia-b0eb91.netlify.app/.netlify/functions/api",
    // baseURL: "https://1c48-103-7-38-187.ngrok-free.app/.netlify/functions/api",
});

export default axiosInstance;
