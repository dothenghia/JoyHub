
// const notifications = [
//     {
//         id: 'ID1234',
//         title:'Bao\' Dong^. Do?, Anh Nho\' Em',
//         content: 'Bao\' Dong^. Do?, Anh Nho\' Em',
//         date: '21/12/2022',
//         type: 'warning',

//     },
//     {
//         id: 'ID1234',
//         title:'[GLOBAL BAN] ZEROS,VINBOI,DIA1,CANHCUT,DNK,NPER',
//         content: 'ZEROS, VINBOI, DIA1,CANHCUT,DNK,NPER',
//         date: '11/08/2023',
//         type: 'approved'
//     },
//     {
//         id: 'ID1234',
//         title:'[KHACH DA HUY PHONG] : NGOC TRINH 8X',
//         content: 'KHACH: NGOC TRINH 8X DA HUY PHONG',
//         date: '21/01/2023',
//         type: 'approved'
//     },
//     {
//         id: 'ID1234',
//         title:'Bao\' Dong^. Do?, Anh Nho\' Em',
//         content: 'Bao\' Dong^. Do?, Anh Nho\' Em',
//         date: '21/12/2022',
//         type: 'warning'
//     },
//     {
//         id: 'ID1234',
//         title:'[GLOBAL BAN]',
//         content: 'ZEROS,VINBOI,DIA1,CANHCUT,DNK,NPER',
//         date: '11/08/2023',
//         type: 'warning'
//     },
//     {
//         id: 'ID1234',
//         title:'[KHACH DA HUY PHONG]',
//         content: 'KHACH: NGOC TRINH 8X DA HUY PHONG',
//         date: '21/01/2023',
//         type: 'warning'
//     },
//     {
//         id: 'ID1234',
//         title:'[DAY LA THONG BAO]',
//         content: 'Bao\' Dong^. Do?, Anh Nho\' Em',
//         date: '21/12/2022',
//         type: 'approved'
//     },
//     {
//         id: 'ID1234',
//         title:'[GLOBAL BAN]',
//         content: 'ZEROS,VINBOI,DIA1,CANHCUT,DNK,NPER',
//         date: '11/08/2023',
//         type: 'warning'
//     },
//     {
//         id: 'ID1234',
//         title:'[KHACH DA HUY PHONG]',
//         content: 'KHACH: NGOC TRINH 8X DA HUY PHONG',
//         date: '21/01/2023',
//         type: 'approved'
//     },
// ]

import axiosInstance from "../configs";

export default async function getNotifications()
{
    let res = null;
    try {
        res = await axiosInstance.get("mod/notification");

        let notifications = [];

        for (i of res.data.message)
        {


            notifications.push(
                {
                    id: i["_id"],
                    title : i["title"],
                    content: i["content"],
                    type: i["status"],
                    date: i["updated_at"],
                }
            )
        }


        return notifications
    }
    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }
    return [];

}
