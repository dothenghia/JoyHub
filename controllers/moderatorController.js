import getRoomList from "../models/moderator/getRoomList"
import getAllAmenities from "../models/moderator/getAllAmenities"
import getHotelInfo from "../models/moderator/getHotelInfo"
import modMainScreen from "../models/moderator/ModMainScreen"
import getNotifications from "../models/moderator/getNotifications"
import getModInfo from "../models/moderator/getModInfo"
import getAllTypes from "../models/moderator/getAllTypes"
import addRoom from "../models/moderator/addRoom"
import removeRoom from "../models/moderator/removeRoom"
import getVerify from "../models/moderator/getVerifyList"
import acceptVerify from "../models/moderator/acceptVerify"
import removeVerify from "../models/moderator/removeVerify"
export default async function MController (type, ...payload) 
{
    switch (type) 
    {
        case 'GETHOTELINFO':
            try
            {
                const hotelInfo = await getHotelInfo()
                return hotelInfo
            }
            catch (error)
            {
                console.log(error)
                return { 
                    roomList : [],
                    amenitiesList : []
                }
            }            
        case 'GETALLTYPES':
            const typeList = await getAllTypes()
            return typeList     
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
        case 'GETMODINFO':
            const modInfo = await getModInfo()
            return modInfo
        case 'ADDROOM':
            const addRes = await addRoom(...payload)
            return addRes
        case 'REMOVEROOM':
            const removeRes = await removeRoom(...payload)
            return removeRes
        case 'GETVERIFY':
            const verify = await getVerify()
            return verify
        case 'ACCEPTVERIFY':
            const acceptV = await acceptVerify(...payload)
            return acceptV
        case 'REMOVEVERIFY':
            const removeV = await removeVerify(...payload)
            return removeV
        default:
            return null
    }
}
