import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: "https://timely-chebakia-b0eb91.netlify.app/.netlify/functions/api",
    baseURL: "https://2237-115-73-214-48.ngrok-free.app/.netlify/functions/api",
});

export default axiosInstance;
