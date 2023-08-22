import axiosInstance from "../configs";

// @ Chờ hình


const thumbnails = [ // List of thumbnails
    {
        id: 1, // (Optional)
        thumbnail: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/366770422_237349995405300_2188686538693620809_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=T389GopaiGIAX-t_H61&_nc_ht=scontent.fsgn2-6.fna&oh=03_AdSstDjlx1pjNNINgHqmDl0JY35M-kGA7722Rzp4sogJNA&oe=64FF1611'
    },
    {
        id: 2,
        thumbnail: 'https://scontent.fsgn2-8.fna.fbcdn.net/v/t1.15752-9/365292940_1004693987439347_5141812361370836958_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=2NcqQ-6T5LwAX8Qnuxt&_nc_ht=scontent.fsgn2-8.fna&oh=03_AdQ9T5G-tiKbogRlbO5geON3z2rPujaVYb4H6mCXQqJXhQ&oe=64FF0CA3'
    },
    {
        id: 3,
        thumbnail: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/366089624_254415597520417_7593820784693884510_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=6_IIUeffuQYAX9woeEE&_nc_ht=scontent.fsgn2-6.fna&oh=03_AdTJ90ZDQEx8QWx2ATfs-aYRw7FeV3PM1QC-kGuYbHE6bg&oe=64FF0F8F'
    },
    {
        id: 4,
        thumbnail: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.15752-9/365466241_308834471504233_4451024423161974554_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=tLvLlIlyhHEAX-HpCTK&_nc_ht=scontent.fsgn2-3.fna&oh=03_AdT9YEu4YlpWvz1bkg_Ap-vifPKOZGR3aKJKPwtgunWwLQ&oe=64FF2A2C'
    },
    {
        id: 5,
        thumbnail: 'https://scontent.fsgn2-8.fna.fbcdn.net/v/t1.15752-9/366092502_1443306906521680_5608381428898977712_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=nOSAa20oBbgAX-Rgp8Z&_nc_ht=scontent.fsgn2-8.fna&oh=03_AdTwPXGTKyMqPVUt8V5jaLAHUeLCFxbU41kqXJAfN95-Ng&oe=64FF18D3'
    },
    {
        id: 6,
        thumbnail: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/365282607_6700439816674250_6942472093120431501_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=x2gEVSDO5_sAX9NHvPv&_nc_ht=scontent.fsgn2-4.fna&oh=03_AdS5yxSDBTwx0-oXRaxBoeaUxHa5-Y5DHmAyPHeE2JnOoA&oe=64FF25B5'
    },
]



export default async function getRoomInformation(payload) {

    let roomId = payload[0].slug

    let res = null;

    try {
        res = await axiosInstance.get(`/customer/room/${roomId}`);

        res = res.data.message[0]

        // Reformat amenity
        let amen_list = []
        res.amenity_list.forEach((amen) => {
            amen_list.push({ name: amen.amenity.name })
        })
        res['amenities'] = amen_list

        // Temp Thumbnail
        res['thumbnails'] = thumbnails

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