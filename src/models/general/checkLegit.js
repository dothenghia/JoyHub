import axios from "axios"

export default async function checkLegit(payload) {
    console.log('[CheckLegit] : ', payload)
    const response = await axios.get('https://timely-chebakia-b0eb91.netlify.app/.netlify/functions/api/products')
    return response
}
