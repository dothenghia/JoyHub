// request : None

// respone :
// [
const hotelList = [
    {
        id: 1, // Id of the hotel
        name: 'Haley House', // Name of the hotel
        thumbnail: 'LINK HÌNH',
        location: 'District 7, HCM', // Location of the hotel
        star: '4.8', // Average rating of the hotel
        price: '123.000', // Smallest Price of the hotel
    },
    {
        id: 2,
        name: 'Bixcuit',
        thumbnail: 'LINK HÌNH',
        location: 'District BT, HCM',
        star: '4.6',
        price: '100.000',
    },
    {
        id: 3,
        name: 'Anis',
        thumbnail: 'LINK HÌNH',
        location: 'District 6, HCM',
        star: '4.7',
        price: '150.000',
    },
    {
        id: 4,
        name: 'Zed',
        thumbnail: 'LINK HÌNH',
        location: 'District 5, HCM',
        star: '4.2',
        price: '110.000',
    },
]









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
            } else {
                average_star = 0
            }

            if (hotel.rooms) {
                hotel.rooms.forEach((room) => {
                    if (smallest_price > room.price) {
                        smallest_price = room.price
                    }
                })
            } else {
                smallest_price = 0
            }

            hotel['star'] = average_star
            hotel['smallest_price'] = smallest_price
        });

        return res
    }

    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }


    // return hotelList
}