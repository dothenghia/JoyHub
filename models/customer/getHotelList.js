import axiosInstance from "../configs";

export default async function getHotelList() {

    let res = null;

    try {
        res = await axiosInstance.get("/customer/hotel");

        res = res.data.message

        res.forEach((hotel) => {
            let average_star = 0
            let smallest_price = 1000000000

            if (hotel.reviews) {
                hotel.reviews.forEach((review) => {
                    average_star += review.star
                })
                average_star = average_star / hotel.reviews.length

                if (hotel.reviews.length == 0) {
                    average_star = 0
                }
            } else {
                average_star = 0
            }

            if (hotel.rooms && hotel.rooms.length !== 0) {
                hotel.rooms.forEach((room) => {
                    if (smallest_price > room.price) {
                        smallest_price = room.price
                    }
                })
                if (hotel.rooms.length == 0) {
                    smallest_price = 0
                }
            } else {
                smallest_price = 0
            }

            hotel['star'] = average_star
            hotel['smallest_price'] = smallest_price
        });

        console.log('List :', res)

        return res
    }

    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }

}