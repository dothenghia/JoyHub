const reservationList = [
    {
        id: 1, // ID CỦA CÁI ĐƠN
        status: 'Waiting', // 'Waiting' or 'Cancelled' or 'Completed'
        id_hotel: 1, // Id of the hotel
        hotel_name: 'Haley House', // Name of the hotel
        id_room: 11, // Id of the room
        room_name: 'Room 1', // Name of the room
        room_type: 'Queen Room', // Tên của LOẠI PHÒNG ĐÓ
        thumbnail: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/366770422_237349995405300_2188686538693620809_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=T389GopaiGIAX-t_H61&_nc_ht=scontent.fsgn2-6.fna&oh=03_AdSstDjlx1pjNNINgHqmDl0JY35M-kGA7722Rzp4sogJNA&oe=64FF1611',

        start_date: 'Thu, 4/6/2023', // Trả về dạng j cũng đc
        end_date: 'Sat, 6/6/2023',   // T convert được hết
        price: '400.000',
    },
    {
        id: 2, // ID CỦA CÁI ĐƠN
        status: 'Cancelled', // 'Waiting' or 'Cancelled' or 'Completed'
        id_hotel: 1, // Id of the hotel
        hotel_name: 'Haley House', // Name of the hotel
        id_room: 11, // Id of the room
        room_name: 'Room 1', // Name of the room
        room_type: 'Queen Room', // Tên của LOẠI PHÒNG ĐÓ
        thumbnail: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/366770422_237349995405300_2188686538693620809_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=T389GopaiGIAX-t_H61&_nc_ht=scontent.fsgn2-6.fna&oh=03_AdSstDjlx1pjNNINgHqmDl0JY35M-kGA7722Rzp4sogJNA&oe=64FF1611',

        start_date: 'Thu, 4/6/2023', // Trả về dạng j cũng đc
        end_date: 'Sat, 6/6/2023',   // T convert được hết
        price: '400.000',
    },
    {
        id: 3, // ID CỦA CÁI ĐƠN
        status: 'Completed', // 'Waiting' or 'Cancelled' or 'Completed'
        id_hotel: 1, // Id of the hotel
        hotel_name: 'Haley House', // Name of the hotel
        id_room: 11, // Id of the room
        room_name: 'Room 1', // Name of the room
        room_type: 'Queen Room', // Tên của LOẠI PHÒNG ĐÓ
        thumbnail: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/366770422_237349995405300_2188686538693620809_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=T389GopaiGIAX-t_H61&_nc_ht=scontent.fsgn2-6.fna&oh=03_AdSstDjlx1pjNNINgHqmDl0JY35M-kGA7722Rzp4sogJNA&oe=64FF1611',

        start_date: 'Thu, 4/6/2023', // Trả về dạng j cũng đc
        end_date: 'Sat, 6/6/2023',   // T convert được hết
        price: '400.000',
    },
    {
        id: 4, // ID CỦA CÁI ĐƠN
        status: 'Completed', // 'Waiting' or 'Cancelled' or 'Completed'
        id_hotel: 1, // Id of the hotel
        hotel_name: 'Haley House', // Name of the hotel
        id_room: 11, // Id of the room
        room_name: 'Room 1', // Name of the room
        room_type: 'Queen Room', // Tên của LOẠI PHÒNG ĐÓ
        thumbnail: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/366770422_237349995405300_2188686538693620809_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=T389GopaiGIAX-t_H61&_nc_ht=scontent.fsgn2-6.fna&oh=03_AdSstDjlx1pjNNINgHqmDl0JY35M-kGA7722Rzp4sogJNA&oe=64FF1611',

        start_date: 'Thu, 4/6/2023', // Trả về dạng j cũng đc
        end_date: 'Sat, 6/6/2023',   // T convert được hết
        price: '400.000',
    },
    {
        id: 5, // ID CỦA CÁI ĐƠN
        status: 'Completed', // 'Waiting' or 'Cancelled' or 'Completed'
        id_hotel: 1, // Id of the hotel
        hotel_name: 'Haley House', // Name of the hotel
        id_room: 11, // Id of the room
        room_name: 'Room 1', // Name of the room
        room_type: 'Queen Room', // Tên của LOẠI PHÒNG ĐÓ
        thumbnail: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/366770422_237349995405300_2188686538693620809_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=T389GopaiGIAX-t_H61&_nc_ht=scontent.fsgn2-6.fna&oh=03_AdSstDjlx1pjNNINgHqmDl0JY35M-kGA7722Rzp4sogJNA&oe=64FF1611',

        start_date: 'Thu, 4/6/2023', // Trả về dạng j cũng đc
        end_date: 'Sat, 6/6/2023',   // T convert được hết
        price: '400.000',
    },
]

export default async function getReservationList() {
    return reservationList
}