import axiosInstance from "../configs";


export default async function getAllTypes() {
    let res = null;
    try {

        res = await axiosInstance.get("/mod/amenity");
        //console.log(`Message: ${res.data.message}- Role: ${res.data.role}`);
        //console.log(JSON.stringify(res.data, null, 2));

        //axiosInstance.defaults.headers.common["auth-token"] = res.headers["auth-token"];
      
    }
    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }
    console.log(res.data)
    return amenitiesr;
}