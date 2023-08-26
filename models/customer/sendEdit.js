import axiosInstance from "../configs";

export default async function sendEdit(payload) {

    let e = payload[0]
    let p = payload[1]
    let un = payload[2]

    console.log(`[Edit]\nEmail : ${e} , Phone : ${p} , Name : ${un}`)

    try {
        res = await axiosInstance.put(`/customer/profile`, {
            email: e,
            phone: p,
            full_name: un
        });

        res = res.data.message
        
        console.log('[Edit status] :', res);
        
        return res
    }


    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }

}