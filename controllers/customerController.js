import getHotelList from "../models/customer/getHotelList";
import getHotelInformation from "../models/customer/getHotelInformation";
import getReservationList from "../models/customer/getReservationList";
import getNotificationList from "../models/customer/getNotification";
import getLocationList from "../models/customer/getLocationList";

export default async function CController (type, ...payload) {
    switch (type) {
        case 'GETHOTELLIST' : {
            const hotelList = await getHotelList()
            return hotelList
        }

        case 'GETLOCATIONLIST' : {
            const locationList = await getLocationList()
            return locationList
        }

        case 'GETHOTELINFORMATION' : {
            const hotelInformation = await getHotelInformation()
            return hotelInformation
        }

        case 'GETRESERVATIONLIST' : {
            const reservationList = await getReservationList()
            return reservationList
        }

        case 'GETNOTIFICATIONLIST' : {
            const notificationList = await getNotificationList()
            return notificationList
        }


        default : {
            
        }
    }
}