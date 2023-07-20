import checkLegit from "../models/general/checkLegit"

export default async function GController (type, ...payload) {
    switch (type) {
        case 'CHECKLEGIT' : {
            const receivedData = await checkLegit(payload)
            return receivedData
        }

        case 'FORGOTPASSWORD' : {

        }

        case 'CUSTOMERREGISTER' : {
        
        }

        case 'MODERATORREGISTER' : {
            
        }

        default : {
            
        }
    }
}
