import axiosInstance from "../configs";

export default async function removeModerator(username) {
    try {
        console.log(`URL: /admin/moderator/${username}`);
        const response = await axiosInstance.delete(`/admin/moderators/${username}`);
        console.log(`Remove moderator response: ${JSON.stringify(response.data.message)}`);
        return {res: response.data.message};
    }
    catch (error) {
        console.log(`Remove moderator error: ${error.response.data.message}`);
        return {error: error.response.data.message};
    }
}
