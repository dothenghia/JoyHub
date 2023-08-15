
// request =
// {
//     id, // Id of the hotel => Lấy thông tin
//     start_date , // Ngày Đến (MUỐN T GỬI NGÀY DẠNG GÌ ??)
//     // {day; month; year} hay dạng j
//     end_date , // Ngày Đi => 2 cái này dùng để truy vấn tình trạng phòng
// }

// respone =
// {
const paymentInformation = {
    id_hotel: 1, // Id of the hotel
    hotel_name: 'Haley House', // Name of the hotel
    room_type: 'Queen Room', // Tên của LOẠI PHÒNG ĐÓ
    id_room: 11, // Id of the room
    room_name: 'Room 1', // Tên phòng đó ???

    thumbnail: 'LINK HÌNH', // Image URL
    location: 'District 7, HCM', // Location of the hotel

    price: '123.000', // Giá 1 đêm
    
    joycoin: '200.000', // Joycoin of this user
}


export default async function getHotelInformation() {
    return paymentInformation
}