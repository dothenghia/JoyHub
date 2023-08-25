import axiosInstance from "../configs";


export default async function declineVerify(...payload) {
    let res = null;
    let id = payload[0]
    
    try {

        res = await axiosInstance.put(`/mod/verify/decline/${id}`);
        //console.log(`Message: ${res.data.message}- Role: ${res.data.role}`);
        //console.log(JSON.stringify(res.data, null, 2));

        //axiosInstance.defaults.headers.common["auth-token"] = res.headers["auth-token"];
        return res
    }
    catch (err) {
        if (err.response) {
       
            return { error: err.response.data.message };
        }
    }
 
    return null;
}