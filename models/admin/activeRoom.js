import axiosInstance from "../configs";

export default async function activeRoom(id) {
    try {
        const response = await axiosInstance.put(`/admin/rooms/active/${id}`);
        if (response.data.message === "success") {
            return true
        }
        else {
            return false
        }
    }
    catch (error) {
        console.log(`Update room error: ${error.response.data.message}`);
        return false
    }
}