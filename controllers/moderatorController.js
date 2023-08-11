import getRoomList from "../models/moderator/getRoomList"
import getHotelAmenities from "../models/moderator/getHotelAmenities"
import getHotelInfo from "../models/moderator/getHotelInfo"
export default async function MController (type, ...payload) 
{
    switch (type) 
    {
        case 'GETHOTELINFO':
            const hotelInfo = getHotelInfo()
            return hotelInfo
        case 'GETROOMLIST':
            const roomList = await getRoomList()
            return roomList
    }
}
