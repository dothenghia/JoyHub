import axiosInstance from "../configs";

export default async function login(username, password) {
    username = username.toLowerCase();
    try {
        const res = await axiosInstance.post("/auth/login", {
            username: username,
            password: password,
        });
        console.log(`Message: ${res.data.message}- Role: ${res.data.role}`);
        axiosInstance.defaults.headers.common["auth-token"] = res.headers["auth-token"];
        return {role: res.data.role}
    }
    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return {error: err.response.data.message};
        }
    }
}
