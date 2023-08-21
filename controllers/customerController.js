import getHotelList from "../models/customer/getHotelList";
import getHotelInformation from "../models/customer/getHotelInformation";
import getReservationList from "../models/customer/getReservationList";
import getNotificationList from "../models/customer/getNotificationList";
import getLocationList from "../models/customer/getLocationList";
import getRoomInformation from "../models/customer/getRoomInformation";
import getPaymentInformation from "../models/customer/getPaymentInformation";
import getUserInformation from "../models/customer/getUserInformation";
import getDetailReservation from "../models/customer/getDetailReservation";
import getFavoriteList from "../models/customer/getFavoriteList";

export default async function CController (type, ...payload) {
    // console.log('[payload]' , payload)

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
            const hotelInformation = await getHotelInformation(payload)
            return hotelInformation
        }

        case 'GETROOMINFORMATION' : {
            const roomInformation = await getRoomInformation(payload)
            return roomInformation
        }

        case 'GETPAYMENTINFORMATION' : {
            const paymentInformation = await getPaymentInformation(payload)
            return paymentInformation
        }

        case 'GETRESERVATIONLIST' : {
            const reservationList = await getReservationList()
            return reservationList
        }
        
        case 'GETDETAILRESERVATION' : {
            const reservationInformation = await getDetailReservation()
            return reservationInformation
        }

        case 'GETNOTIFICATIONLIST' : {
            const notificationList = await getNotificationList()
            return notificationList
        }

        case 'GETUSERINFORMATION' : {
            const userInformation = await getUserInformation()
            return userInformation
        }

        case 'GETFAVORITELIST' : {
            const favoriteList = await getFavoriteList()
            return favoriteList
        }


        default : {
            
        }
    }
}