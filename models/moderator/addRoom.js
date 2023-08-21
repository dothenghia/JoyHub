import axiosInstance from "../configs";
import * as ImagePicker from 'expo-image-picker';

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

import axios from 'axios'
const uploadImageToImgur = async (imageData) => {
    //console.log("BASE", imageData)
    let base64 = await convertImageToBase64(imageData);
    //console.log("BASE64 : ", base64)
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
        console.error('YOU GOT AN ERROR:', error);

    }
    return null;
}




export default async function addRoom(...payload) {

    let send = payload[0];
    // console.log("send init: ", send)
    // console.log("image init: ", send["image"])




    let imageList = [];
    for (i = 0; i < send["image"].length; ++i) {
        //console.log("IMG I: " + send["image"][i])
        try {
            let link = await uploadImageToImgur(send["image"][i])
            if (link)
                imageList.push(link);
        }
        catch (error) {
            console.log("Error at [" + i + "]: " + error)
        }
    }

    await sendRequest(send,imageList)
    
}


async function sendRequest(sendData, imageList)
{
    let res =  null
    sendData["image"] = imageList
    console.log("SEND: ", sendData)
    try {
        
        res = await axiosInstance.post("/mod/room", sendData);
        //console.log(`Message: ${res.data.message}- Role: ${res.data.role}`);
        //console.log(JSON.stringify(res.data, null, 2));

        //axiosInstance.defaults.headers.common["auth-token"] = res.headers["auth-token"];
        console.log("SEND RESPONSE:",res.data.message);
    }
    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }
}

