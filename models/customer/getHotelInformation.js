import axiosInstance from "../configs";

// @ isFavirite ?
// @ Chờ hình

export default async function getHotelInformation(payload) {

    let hotelId = payload[0].slug
    let s_date = payload[1].startDate.toISOString()
    let e_date = payload[1].endDate.toISOString()

    // console.log('Req :', hotelId, s_date, e_date)

    let res = null;

    try {
        res = await axiosInstance.post(`/customer/hotel/${hotelId}`, {
            check_in: s_date,
            check_out: e_date
        });

        res = res.data.message[0]

        // GET STAR
        let average_star = 0
        if (res.reviews) {
            res.reviews.forEach((review) => {
                average_star += review.star
            })
            average_star = average_star / res.reviews.length

            if (res.reviews.length == 0) {
                average_star = 0
            }
        } else {
            average_star = 0
        }
        res['star'] = average_star


        // GET AMENITY LIST
        let amen_list = []
        res.rooms.forEach((room) => {
            room.amenity_list.forEach((amen) => {
                if (amen_list.includes(amen.amenity.name) == false) {
                    amen_list.push(amen.amenity.name)
                }
            })
        })
        let amen_obj_list = []
        amen_list.forEach((amen) => {
            amen_obj_list.push({name :amen})
        })
        res['amenities'] = amen_obj_list


        // SPLIT ROOM BY TYPE
        let room_list = []
        res.rooms.forEach((room) => {
            if (!room_list[room.room_type]) {
                room_list[room.room_type] = {
                    room_type: room.room_type,
                    room_list: []
                };
            }
            const { room_type, ...roomData } = room;
            room_list[room_type].room_list.push(roomData);
        });
        res['rooms_list'] = Object.values(room_list);

        console.log('Hotel :', res)
        return res

    }

    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }

}