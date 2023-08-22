import axiosInstance from "../configs";

export default async function getReservationList() {

    let res = null;

    try {
        res = await axiosInstance.get("/customer/getReservation");

        res = res.data.message

        // console.log(res);

        return res
    }

    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }

}