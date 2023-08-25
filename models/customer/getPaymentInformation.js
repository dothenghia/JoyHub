import axiosInstance from "../configs";

export default async function getPaymentInformation(payload) {

    let roomId = payload[0].slug

    let res = null;

    try {
        res = await axiosInstance.get(`/customer/getPreBill/${roomId}`);

        roomInfo = res.data.message.room[0]
        userInfo = res.data.message.user[0]

        console.log('PreBill :', roomInfo)
        console.log(userInfo)

        let result = {}
        result['hotel_name'] = roomInfo.hotel[0].hotel_name
        result['room_name'] = roomInfo.name
        result['room_type'] = roomInfo.room_type
        result['address'] = roomInfo.hotel[0].address
        result['price'] = roomInfo.price

        result['full_name'] = userInfo.full_name
        result['joycoin'] = userInfo.account[0].wallet
        result['phone'] = userInfo.account[0].phone

        result['hotel_obj_id'] = roomInfo.hotel[0]['_id']
        result['hotel_id'] = roomInfo.hotel_id
        result['room_id'] = roomInfo._id

        return result
    }

    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }

}