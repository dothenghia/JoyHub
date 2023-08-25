import axiosInstance from "../configs";


export default async function getVerifyList()
{

    let res = null;
    try {
        res = await axiosInstance.get("/mod/verify");
        //console.log(`Message: ${res.data.message}- Role: ${res.data.role}`);
        //console.log(JSON.stringify(res.data, null, 2));

        //axiosInstance.defaults.headers.common["auth-token"] = res.headers["auth-token"];
        //console.log("VERIFY DATA:", res.data.message);

        let verifyList = [];
        for (i of res.data.message)
        {
           
            let img = i["image"][0]
            if(!img)
            {
                img = ["https://i.imgur.com/TMfTk0F.jpg"]
            }
                
            verifyList.push(
                {   
                    id: i["_id"],
                    room: i["room"],
                    checkin: new Date(i["checkin"]).toLocaleDateString('vi-VN', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                      }),
                    checkout: new Date(i["checkout"]).toLocaleDateString('vi-VN', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                      }),
                    phone: i["phone"],
                    customer: i["customer"],
                    image: img[0]
                }
            )
        }
        

        return verifyList;
    }
    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }   
    return [];
}