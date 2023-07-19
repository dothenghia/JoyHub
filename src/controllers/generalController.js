import axios from 'axios'
import checkLegit from "../models/general/checkLegit"

export default async function GController (type, ...payload) {
    switch (type) {
        case 'CHECKLEGIT' : {
            // console.log(payload)
            // const response = await axios.get('https://timely-chebakia-b0eb91.netlify.app/.netlify/functions/api/products')

            let hehe = {
                name: 'Something',
                description: 'Someone',
                price: 101
            }
            const response = await axios.post(`https://timely-chebakia-b0eb91.netlify.app/.netlify/functions/api/products`, hehe )

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
