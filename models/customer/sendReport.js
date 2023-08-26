import axiosInstance from "../configs";

export default async function sendReport(payload) {

    let bookingId = payload[0]._id
    let ct = payload[1]

    console.log(`[Report]\nBooking ID : ${bookingId}\nContent : ${ct}`)

    try {
        res = await axiosInstance.post(`/customer/report`, {
            booking_id: bookingId,
            content: ct
        });

        res = res.data.message
        
        console.log('[Report status] :', res);
        
        return res
    }


    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }

}