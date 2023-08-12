import getRoomList from "../models/moderator/getRoomList"
import getAllAmenities from "../models/moderator/getAllAmenities"
import getHotelInfo from "../models/moderator/getHotelInfo"
import modMainScreen from "../models/moderator/ModMainScreen"
import getNotifications from "../models/moderator/getNotifications"
export default async function MController (type, ...payload) 
{
    switch (type) 
    {
        case 'GETHOTELINFO':
            const hotelInfo = await getHotelInfo()
            return hotelInfo
        case 'GETROOMLIST':
            const roomList = await getRoomList()
            return roomList
        case 'GETALLAMENITIES':
            const amenities = await getAllAmenities()
            return amenities
        case 'MODMAINSCREEN':
            const mainscreenInfo = await modMainScreen()
            return mainscreenInfo
        case 'GETNOTIFICATIONS':
            const notifications = await getNotifications()
            return notifications
        default:
            return null
    }
}
