import axios from "axios";

const axiosInstance = axios.create({
    //baseURL: "https://timely-chebakia-b0eb91.netlify.app/.netlify/functions/api",
    baseURL: "https://e9f0-103-249-23-130.ngrok-free.app/.netlify/functions/api",
});

export default axiosInstance;
