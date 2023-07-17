import axios from 'axios'
import checkLegit from "../model/general/checkLegit"

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
