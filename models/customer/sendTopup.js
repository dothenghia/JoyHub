import axiosInstance from "../configs";

export default async function sendTopup(payload) {

    let accId = payload[0].account_id
    let m = payload[1]
    console.log(`[Topup] Account ID : ${accId} Money : ${m}`)

    try {
        res = await axiosInstance.post(`/booking/addmoney`, {
            account_id: accId,
            money: m
        });

        res = res.data.message

        console.log('[Topup status] :', res);
        
        return res
    }


    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }

}