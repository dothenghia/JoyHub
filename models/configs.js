import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://timely-chebakia-b0eb91.netlify.app/.netlify/functions/api",
    // baseURL: "https://5289-123-20-162-232.ngrok-free.app/.netlify/functions/api",
});

export default axiosInstance;
