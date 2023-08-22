import axiosInstance from "../configs";

// const verifyList = [
//     {
//         room: 'Couple Room',
//         customer: 'Jack 5 Cu',
//         phone: '0969696969',
//         checkin: '15/07/2023',
//         checkout: '18/07/2023',
//     },
//     {
//         room: 'Three Some Room',
//         customer: 'J97',
//         phone: '0969696969',
//         checkin: '23/07/2023',
//         checkout: '27/07/2023',
//     },
//     {
//         room: 'Hand Some Room',
//         customer: 'K-ICM',
//         phone: '0969696969',
//         checkin: '21/07/2023',
//         checkout: '23/07/2023',
//     },
//     {
//         room: 'Secret Room',
//         customer: 'Son Tung MTP',
//         phone: '0969696969',
//         checkin: '02/08/2023',
//         checkout: '07/08/2023',
//     },
//     {
//         room: 'Secret Room',
//         customer: 'Donald Trump',
//         phone: '0969696969',
//         checkin: '02/08/2023',
//         checkout: '07/08/2023',
//     },
// ]


export default async function getVerifyList()
{

    let res = null;
    try {
        res = await axiosInstance.get("/mod/verify");
        //console.log(`Message: ${res.data.message}- Role: ${res.data.role}`);
        //console.log(JSON.stringify(res.data, null, 2));

        //axiosInstance.defaults.headers.common["auth-token"] = res.headers["auth-token"];
        console.log("VERIFY DATA:", res.data.message);

        let verifyList = [];
        for (i of res.data.message)
        {
   
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
                    customer: i["customer"]
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