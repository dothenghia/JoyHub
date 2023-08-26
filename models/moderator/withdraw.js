import axiosInstance from "../configs";
import axios from 'axios';


export default async function withdraw(...payload) {
    let res = null;
    let money = payload[0]
    img = null;
    try {
    
        res = await axiosInstance.put(`/mod/withdraw/${money}`);
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