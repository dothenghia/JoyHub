import axios from 'axios'
import checkLegit from "../models/general/checkLegit"

export default async function GController (type, ...payload) {
    switch (type) {
        case 'CHECKLEGIT' : {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            return response
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
