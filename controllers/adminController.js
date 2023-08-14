import getModerator from "../models/admin/getModerator";
import updateModerator from "../models/admin/updateModerator";
import removeModerator from "../models/admin/removeModerator";

const actions = {
    GETMODERATOR: async () => {
        const result = await getModerator();
        // console.log(`[INFO] Get moderator result: ${JSON.stringify(result)}`);
        return result;
    },
    UPDATEMODERATOR: async (username) => {
        return await updateModerator(username);
    },
    REMOVEMODERATOR: async (username) => {
        return await removeModerator(username);
    }
}


export default async function AController (type, ...payload) {
    return await actions[type](payload);
}
