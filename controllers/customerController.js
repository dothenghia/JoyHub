import getHotelList from "../models/customer/getHotelList";
import getHotelInformation from "../models/customer/getHotelInformation";
import getReservationList from "../models/customer/getReservationList";

export default async function CController (type, ...payload) {
    switch (type) {
        case 'GETHOTELLIST' : {
            const hotelList = await getHotelList()
            return hotelList
        }

        case 'GETHOTELINFORMATION' : {
            const hotelInformation = await getHotelInformation()
            return hotelInformation
        }

        case 'GETRESERVATIONLIST' : {
            const reservationList = await getReservationList()
            return reservationList
        }


        default : {
            
        }
    }
}