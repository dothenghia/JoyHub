import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://timely-chebakia-b0eb91.netlify.app/.netlify/functions/api",
    // baseURL: "https://8e67-2405-4802-9019-cb70-203b-7f07-e8ef-2734.ngrok-free.app/.netlify/functions/api",
});

export default axiosInstance;
