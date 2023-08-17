import getHotelList from "../models/customer/getHotelList";
import getHotelInformation from "../models/customer/getHotelInformation";
import getReservationList from "../models/customer/getReservationList";
import getNotificationList from "../models/customer/getNotificationList";
import getLocationList from "../models/customer/getLocationList";
import getRoomInformation from "../models/customer/getRoomInformation";
import getPaymentInformation from "../models/customer/getPaymentInformation";
import getUserInformation from "../models/customer/getUserInformation";
import getDetailReservation from "../models/customer/getDetailReservation";

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

        case 'GETROOMINFORMATION' : {
            const roomInformation = await getRoomInformation()
            return roomInformation
        }

        case 'GETPAYMENTINFORMATION' : {
            const paymentInformation = await getPaymentInformation()
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


        default : {
            
        }
    }
}