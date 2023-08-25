import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://timely-chebakia-b0eb91.netlify.app/.netlify/functions/api",
    //baseURL: "https://76fa-103-129-191-85.ngrok-free.app/.netlify/functions/api",
});

export default axiosInstance;
