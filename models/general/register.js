import axiosInstance from "../configs";
export default async function register(account) {
    console.log(`Registering account ${JSON.stringify(account)}`);
    account.username = account.username.toLowerCase();
    try {
        const response = await axiosInstance.post("/auth/register", account);
        console.log(`Register response: ${JSON.stringify(response.data.message)}`);
        return {res: response.data.message};
    }
    catch (error) {
        console.log(`Register error: ${error.response.data.message}`);
        return {error: error.response.data.message};
    }
}
