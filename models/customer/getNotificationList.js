import axiosInstance from "../configs";

export default async function getNotificationList() {

    let res = null;

    try {
        res = await axiosInstance.get("/customer/notification_list");

        res = res.data.message

        console.log('Noti :', res)

        return res
    }

    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }

}