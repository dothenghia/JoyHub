import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: "https://timely-chebakia-b0eb91.netlify.app/.netlify/functions/api",
    baseURL: "https://9e92-2405-4800-5b0f-70ee-713b-d3a0-7bec-1ee1.ngrok-free.app/.netlify/functions/api",
});

export default axiosInstance;
