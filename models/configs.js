import axios from "axios";

const axiosInstance = axios.create({
    //baseURL: "https://timely-chebakia-b0eb91.netlify.app/.netlify/functions/api",
    baseURL: "https://409c-115-73-217-121.ngrok-free.app/.netlify/functions/api",
});

export default axiosInstance;
