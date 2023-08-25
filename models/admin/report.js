import axiosInstance from "../configs";

export async function getReportList(){
    try {
        const res = await axiosInstance.get(`admin/report`);
        console.log(`[INFO] Get report list result: ${JSON.stringify(res.data.message, null, 2)}`);
        res.data.message.forEach(report => {
            report.date = convertTime(report.latest_report.updated_at);
        });
        return res.data.message;
    }
    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }
}

function convertTime(isoString) {
    // console.log(isoString)
    let isoDate = new Date(isoString);
    let time_to_now = new Date() - isoDate;
    if (time_to_now < 60000) {
        time_to_now = Math.floor(time_to_now / 1000);
        return `${time_to_now} seconds ago`;
    }
    else if (time_to_now < 3600000) {
        time_to_now = Math.floor(time_to_now / 60000);
        return `${time_to_now} minutes ago`;
    }
    else if (time_to_now < 86400000) {
        time_to_now = Math.floor(time_to_now / 3600000);
        return `${time_to_now} hours ago`;
    }
    else if (time_to_now < 604800000) {
        time_to_now = Math.floor(time_to_now / 86400000);
        return `${time_to_now} days ago`;
    }
    return isoDate.string().slice(0, 15);
}

export async function getReportOfHotel(id) {
    try {
        const res = await axiosInstance.get(`admin/report/${id}`);
        console.log(`[INFO] Get report hotel result: ${JSON.stringify(res.data.message, null, 2)}`);
        // convert iso string date to date object
        res.data.message.forEach(report => {
            report.date = convertTime(report.updated_at);
        });
        return res.data.message;
    }
    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }
}

export async function updateReadingStatus(hotel_id) {
    try {
        const res = await axiosInstance.put(`admin/report/${hotel_id}`);
        console.log(`[INFO] Update reading status result: ${JSON.stringify(res.data.message, null, 2)}`);
        return res.data.message;
    }
    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }
}
