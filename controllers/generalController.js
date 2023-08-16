import login from "../models/general/login"
import register from "../models/general/register"

const actions = {
    LOGIN: loginUser,
    MODERATORREGISTER: registerModerator,
    CUSTOMERREGISTER: registerCustomer,
    FORGOTPASSWORD: null,
}

async function loginUser(payload) {
    const [username, password] = payload;
    console.log(`[INFO] Login username: ${username} - password: ${password}`);
    const result = await login(username, password);
    console.log(`[INFO] Login result: ${JSON.stringify(result)}`);
    return result;
}

async function registerModerator(payload) {
    const [username, password, email, role, hotel_name, address, description, owner_name] = payload;
    return await register({username, password, email, role, hotel_name, address, description, owner_name});
}

async function registerCustomer(payload) {
    const [username, password, email, role, full_name] = payload;
    return await register({username, password, email, role, full_name});
}

export default async function GController (type, ...payload) {
    // switch (type) {
    //     case 'CHECKLEGIT' : {
    //         return await checkLegit(payload)
    //     }

    //     case 'FORGOTPASSWORD' : {

    //     }

    //     case 'CUSTOMERREGISTER' : {
    //         const [username, password, email, role, full_name] = payload;
    //         return await register({username, password, email, role, full_name});
    //     }

    //     case 'MODERATORREGISTER' : {
    //         const [username, password, email, role, hotel_name, address, description, owner_name] = payload;
    //         return await register({username, password, email, role, hotel_name, address, description, owner_name});
    //     }

    //     case 'LOGIN':
    //     {
    //         // destructure payload
    //         const [username, password] = payload;
    //         console.log(`[INFO] Login username: ${username} - password: ${password}`);
    //         const result = await login(username, password);
    //         console.log(`[INFO] Login result: ${JSON.stringify(result)}`);
    //         return result;
    //     }

    //     default : {

    //     }
    // }
    return await actions[type](payload);
}
