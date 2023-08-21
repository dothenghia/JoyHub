import axiosInstance from "../configs";

export default async function removeRoom(id) {
    try {
        // console.log(`[INFO] Remove room id: ${id}`);
        const response = await axiosInstance.delete(`/admin/rooms/${id}`);
        // console.log(`Update moderator response: ${JSON.stringify(response.data.message)}`);
        if (response.data.message === "success") {
            return true
        }
        else {
            return false
        }
    }
    catch (error) {
        // console.log(`Update moderator error: ${error.response.data.message}`);
        return false;
    }
}