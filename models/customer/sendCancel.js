import axiosInstance from "../configs";

export default async function sendCancel(payload) {

    let hotelId = payload[0].hotel_id
    let roomId = payload[0].room_id

    console.log(`[Cancel]\nRoom ID : ${roomId}\nHotel ID : ${hotelId}`)

    try {
        res = await axiosInstance.put(`/customer/cancelRoom`, {
            hotel_id: hotelId,
            room_id: roomId
        });

        res = res.data.message
        
        console.log('[Cancel status] :', res);
        
        return res
    }


    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }

}