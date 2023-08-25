import axiosInstance from "../configs";

// @ Chờ hình


const thumbnails = [ // List of thumbnails
    "https://i.imgur.com/TMfTk0F.jpg"
]



export default async function getRoomInformation(payload) {

    let roomId = payload[0].slug

    let res = null;

    try {
        res = await axiosInstance.get(`/customer/room/${roomId}`);

        res = res.data.message[0]
        console.log('Room :', res)

        // Reformat amenity
        // let amen_list = []
        // res.amenity_list.forEach((amen) => {
        //     amen_list.push({ name: amen.amenity.name })
        // })
        // res['amenities'] = amen_list

        // Temp Thumbnail
        res['thumbnails'] = (res.image ? res.image : thumbnails)

        // console.log('[getRoomInf] :', res.name, `(${res._id})`)
        return res
    }

    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }

}