import axiosInstance from "../configs";

export default async function removeRoom(...payload) {
    let res=null
    try {
        let id = payload[0]["room_id"]

        res = await axiosInstance.delete(`/mod/room/${id}`);

        console.log("Deleted room: " , id )
        //console.log(`Message: ${res.data.message}- Role: ${res.data.role}`);
        //console.log(JSON.stringify(res.data, null, 2));

        //axiosInstance.defaults.headers.common["auth-token"] = res.headers["auth-token"];
      
    }
    catch (err) {
        if (err.response) {

            return { error: err.response.data.message };
        }
    }

}