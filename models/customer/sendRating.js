import axiosInstance from "../configs";

export default async function sendRating(payload) {

    let bookingId = payload[0]._id
    let s = payload[1]
    let ct = payload[2]

    console.log(`[Rating]\Booking ID : ${bookingId}\nStar : ${s} , Content : ${ct}`)

    try {
        res = await axiosInstance.post(`/customer/rating`, {
            booking_id: bookingId,
            star: s,
            content: 'Gooood'
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