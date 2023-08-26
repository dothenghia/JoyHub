import axiosInstance from "../configs";


export default async function declineVerify(...payload) {
    let res = null;
    let id = payload[0].id
    let customer_id = payload[0].customer_id 
    let room_id = payload[0].room_id
    
    try {

        res1 = await axiosInstance.put(`/mod/verify/decline/${id}`);

        data = {
            to_id : customer_id,
            for: 'customer',
            title: 'Rejected',
            content: 'Your booking is rejected by hotel',
            status: 'rejected',
            room_id: room_id,
            booking_id: id,
            isRead: false,
            updated_at: new Date(),
        }
  
        res2 = await axiosInstance.post('mod/notification',data);
  
        return res1,res2

    }
    catch (err) {
        if (err.response) {
       
            return { error: err.response.data.message };
        }
    }
 
    return null;
}