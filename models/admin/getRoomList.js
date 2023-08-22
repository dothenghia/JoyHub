import axiosInstance from "../configs";
// get amount of waiting rooms of a hotel
export async function getInactiveRoomCount() {
    try {
        const res = await axiosInstance.get(`admin/rooms`);
        // console.log(`[INFO] Get room count result: ${JSON.stringify(res.data.message, null, 2)}`);
        return res.data.message;
    }
    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }
}

// get inactive room list of a hotel by id
export async function getInactiveRoomList(id) {
    try {
        const res = await axiosInstance.get(`admin/rooms/pending/${id}`);
        // console.log(`[INFO] Get room list result: ${JSON.stringify(res.data.message, null, 2)}`);
        return res.data.message;
    }
    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }
}

export async function getRoomDetail(id) {
    try {
        const res = await axiosInstance.get(`admin/rooms/${id}`);
        // console.log(`[INFO] Get room list result: ${JSON.stringify(res.data.message, null, 2)}`);
        return res.data.message;
    }
    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }
}