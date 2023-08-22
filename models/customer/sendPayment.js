import axiosInstance from "../configs";

export default async function sendPayment(payload) {

    let hotelId = payload[0].hotel_id
    // let hotelObjId = payload[0].hotel_obj_id
    let roomId = payload[0].room_id
    let s_date = payload[1].startDate.toISOString()
    let e_date = payload[1].endDate.toISOString()

    console.log(`[Send Info]\nRoom ID : ${roomId}\nDate : ${s_date} -> ${e_date}`)

    try {
        res = await axiosInstance.post(`/booking/room`, {
            hotel_id: hotelId,
            room_id: roomId,
            check_in: s_date,
            check_out: e_date
        });

        res = res.data.message

        console.log('[Send status] :', res);
        
        return res
    }


    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }

}