import axiosInstance from "../configs";

export default async function getUserInformation() {

    let res = null;

    try {
        res = await axiosInstance.get("/customer/getUserInfo");

        res = res.data.message[0]

        console.log('User :', res)

        let result = {}
        result['full_name'] = res.full_name
        result['_id'] = res._id // id bảng customer
        result['email'] = res.account[0].email
        result['phone'] = res.account[0].phone
        result['wallet'] = res.account[0].wallet
        result['account_id'] = res.account[0]._id

        return result
    }

    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }
}