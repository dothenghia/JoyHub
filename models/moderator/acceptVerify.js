import axiosInstance from "../configs";


export default async function acceptVerify(...payload) {
    let res = null;
    let id = payload[0].id
    let customer_id = payload[0].customer_id 
    let room_id = payload[0].room_id
    try {
        
        res1 = await axiosInstance.put(`/mod/verify/accept/${id}`);
        //console.log(`Message: ${res.data.message}- Role: ${res.data.role}`);
        //console.log(JSON.stringify(res.data, null, 2));
        data = {
            to_id : customer_id,
            for: 'customer',
            title: 'Acceptance',
            content: 'Your booking is accepted',
            status: 'accepted',
            room_id: room_id,
            booking_id: id,
            isRead: false,
            updated_at: new Date(),
        }
        
        res2 = await axiosInstance.post('mod/notification',data);
        //axiosInstance.defaults.headers.common["auth-token"] = res.headers["auth-token"];
        return res1,res2
    }
    catch (err) {
        if (err.response) {
       
            return { error: err.response.data.message };
        }
    }
 
    return null;
}