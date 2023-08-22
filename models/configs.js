import axios from "axios";

const axiosInstance = axios.create({
    //baseURL: "https://timely-chebakia-b0eb91.netlify.app/.netlify/functions/api",
    baseURL: "https://672b-2405-4802-9019-cb70-59ce-86e5-c001-e614.ngrok-free.app/.netlify/functions/api",
});

export default axiosInstance;
