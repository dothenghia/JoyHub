import axiosInstance from "../configs";

const amenities = [
    {
        label: "wifi",
        value: "Wifi",
    },
    {
        label: "pool",
        value: "Pool",
    },
    {
        label: "bathtub",
        value: "Bathtub",
    },
    {
        label: "ac",
        value: "Air Conditioner",
    },
    {
        label: "meal",
        value: "Meal"
    }
]

export default async function getAllAmenities() {
    let res = null;
    try {

        res = await axiosInstance.get("/mod/amenity");
        //console.log(`Message: ${res.data.message}- Role: ${res.data.role}`);
        //console.log(JSON.stringify(res.data, null, 2));

        //axiosInstance.defaults.headers.common["auth-token"] = res.headers["auth-token"];
        return res.data.message;
    }
    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }
 
    return [];
}