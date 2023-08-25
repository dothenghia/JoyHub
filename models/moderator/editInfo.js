import axiosInstance from "../configs";
import axios from 'axios';


const CLIENT_ID = '842256555618eb5';

const convertImageToBase64 = async uri => {
    const response = await fetch(uri);
    const blob = await response.blob();

    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const base64data = reader.result.split(',')[1]; // Extract only the base64 data
            resolve(base64data);
        };
        reader.onerror = error => {
            reject(error);
        };
        reader.readAsDataURL(blob);
    });
};

const uploadImageToImgur = async (base64) => {

    try {
        const response = await axios.post(
            'https://api.imgur.com/3/image',
            { image: base64 },
            {
                headers: {
                    Authorization: 'Client-ID ' + CLIENT_ID,
                    'Content-Type': 'application/json',
                },
            }
        );

        if (response.status === 200 && response.data.data && response.data.data.link) {
            console.log('Image uploaded successfully:', response.data.data.link);
            return response.data.data.link;
        } else {
            console.log('Image upload failed');
        }
    } catch (error) {
        console.error('Error uploading image:', error);
    }
}


export default async function editInfo(...payload) {
    let res = null;
    let newInfo = payload[0]
    img = null;
    try {
        if(newInfo["newImage"] == true)
        {
            img = await convertImageToBase64(newInfo["image"])
            link = await uploadImageToImgur(img)
            newInfo["image"] = link
        }

        res = await axiosInstance.put(`/mod/info`,newInfo);
        //console.log(`Message: ${res.data.message}- Role: ${res.data.role}`);
        //console.log(JSON.stringify(res.data, null, 2));

        //axiosInstance.defaults.headers.common["auth-token"] = res.headers["auth-token"];
        return res
    }
    catch (err) {
        if (err.response) {
       
            return { error: err.response.data.message };
        }
    }
 
    return null;
}