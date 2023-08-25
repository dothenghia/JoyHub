import axiosInstance from "../configs";


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
        let amen_list = []
        res.amenity_list.forEach((amen) => {
            amen_list.push({ name: amen.amenity.name })
        })
        res['amenities'] = amen_list

        res['thumbnails'] = ((res.image && res.image.length > 0) ? res.image : thumbnails)

        return res
    }

    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }

}