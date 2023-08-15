
// request =
// {
//     id, // Id of the hotel => Lấy thông tin
//     start_date , // Ngày Đến (MUỐN T GỬI NGÀY DẠNG GÌ ??)
//     // {day; month; year} hay dạng j
//     end_date , // Ngày Đi => 2 cái này dùng để truy vấn tình trạng phòng
// }

// respone =
// {
const hotelInformation = {
    id: 1, // Id of the hotel
    name: 'Haley House', // Name of the hotel
    thumbnail: 'LINK HÌNH', // Image URL
    location: 'District 7, HCM', // Location of the hotel
    favorite: false, // Đây có phải khách sạn đã bấm iu thích ko
    star: '4.8', // Average rating of the hotel
    review: 520, // Number of reviews of the hotel
    // Description of the hotel
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..',

    amenities: [ // List of hotel amenities
        {
            id: 1, // Id của amenity đó
            name: 'Free Wifi', // Tên của amenity
            icon: 'wifi', // Tên của icon của amenity đó (Dùng để mapping icon cho Frontend)
        },                  // Tên icon muốn đặt sao cũng đc
        {
            id: 2,
            name: 'Pool',
            icon: 'pool',
        },
        {
            id: 3,
            name: 'Bath Tub',
            icon: 'bathtub',
        },
        {
            id: 4,
            name: 'Air Conditioner',
            icon: 'ac',
        },
        {
            id: 5,
            name: 'Meal',
            icon: 'meal',
        },
    ],

    rooms: [ // List of rooms (Nhưng chỉ lấy những thông tin cần thiết để hiện ra thumbnail thoi)
        {    // CHỨ KO TRẢ VỀ TOÀN BỘ CÁC THÔNG TIN KHÁC , VÌ SẼ BỊ NẶNG
            room_type: 'Queen Room', // Tên của LOẠI PHÒNG ĐÓ
            room_list: [ // Danh sách các phòng thuộc loại đó
                {        // CÁI NÀY THÌ T KO RÕ, NÊN CÓ J HÚ T NHA
                    id: 1, // Id phòng
                    name: 'Room 1', // Tên phòng
                    thumbnail: 'LINK HÌNH', // Image URL
                    price: '123.000', // Giá 1 đêm
                    status: 'full', // Tình trạng ('full' hoặc 'available')
                    area: 69,
                    capacity: 2,
                    bed: 1,
                },
                {
                    id: 2,
                    name: 'Room 2',
                    thumbnail: 'LINK HÌNH', // Image URL
                    price: '123.000',
                    status: 'available',
                    area: 69,
                    capacity: 2,
                    bed: 1,
                },
            ]
        },
        {
            room_type: 'Deluxe Room',
            room_list: [
                {
                    id: 13,
                    name: 'Room 1',
                    thumbnail: 'LINK HÌNH', // Image URL
                    price: '123.000',
                    status: 'full',
                    area: 100,
                    capacity: 4,
                    bed: 2,
                },
                {
                    id: 24,
                    name: 'Room 2',
                    thumbnail: 'LINK HÌNH', // Image URL
                    price: '123.000',
                    status: 'available',
                    area: 100,
                    capacity: 4,
                    bed: 2,
                },
            ]
        },
    ],

    reviews: [ // List of reviews
        {
            review_id: 123, // Id of the review
            user_name: 'The Nghia', // Name of the user review
            // Nội dung review
            review_comment: 'Really love this hotel <3 They always make me feel cozyyyyy.',
            review_star: 5, // Review rating
        },
        {
            review_id: 462,
            user_name: 'Mac Tuan Trung',
            review_comment: 'Cho nay rat la oke, Toi rat thich',
            review_star: 4.5,
        }
        ,
        {
            review_id: 462,
            user_name: 'Mac Tuan Trung',
            review_comment: 'Cho nay rat la oke, Toi rat thich',
            review_star: 4.5,
        }
        ,
        {
            review_id: 462,
            user_name: 'Mac Tuan Trung',
            review_comment: 'Cho nay rat la oke, Toi rat thich',
            review_star: 4.5,
        }
    ]
}


export default async function getHotelInformation() {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(hotelInformation)
            console.log("[getHotelInformation.js] Finish")
        }, 500)
    })
}