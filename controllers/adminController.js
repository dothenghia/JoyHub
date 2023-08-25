import getModerator from "../models/admin/getModerator";
import updateModerator from "../models/admin/updateModerator";
import removeModerator from "../models/admin/removeModerator";
import {getInactiveRoomCount, getInactiveRoomList, getRoomDetail} from "../models/admin/getRoomList";
import activeRoom from "../models/admin/activeRoom";
import removeRoom from "../models/admin/removeRoom";
import { getReportList, getReportOfHotel, updateReadingStatus } from "../models/admin/report";

const actions = {
    GETMODERATOR: async () => {
        // console.log(`[INFO] Get moderator result: ${JSON.stringify(result)}`);
        return await getModerator();
    },
    UPDATEMODERATOR: async (id) => {
        return await updateModerator(id);
    },
    REMOVEMODERATOR: async (id) => {
        return await removeModerator(id);
    },
    GET_INACTIVE_ROOM_COUNT: async () => {
        return await getInactiveRoomCount();
    },
    GET_INACTIVE_ROOM_LIST: async (id) => {
        // get inactive room list of a hotel by id
        return await getInactiveRoomList(id);
    },
    GET_ROOM_DETAIL: async (id) => {
        // get inactive room list of a hotel by id
        return await getRoomDetail(id);
    },
    ACTIVE_ROOM: async (id) => {
        // get inactive room list of a hotel by id
        return await activeRoom(id);
    },
    REMOVE_ROOM: async (id) => {
        // get inactive room list of a hotel by id
        return await removeRoom(id);
    },
    GET_REPORT_LIST: async () => {
        return await getReportList();
    },
    GET_REPORT_OF_HOTEL: async (id) => {
        return await getReportOfHotel(id);
    },
    MARK_AS_READ: async (hotel_id) => {
        return await updateReadingStatus(hotel_id);
    }
}


export default async function AController (type, ...payload) {
    return await actions[type](payload);
}
