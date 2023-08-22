import axiosInstance from "../configs";

export default async function updateModerator(id) {
    try {
        // console.log(`Updating moderator ${JSON.stringify(username)}`);
        const response = await axiosInstance.put(`/admin/active/${id}`);
        console.log(`Update moderator response: ${JSON.stringify(response.data.message)}`);
        return {res: response.data.message};
    }
    catch (error) {
        console.log(`Update moderator error: ${error.response.data.message}`);
        return {error: error.response.data.message};
    }
}