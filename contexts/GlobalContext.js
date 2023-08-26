// File này dùng để tạo ra các biến dùng chung cho customer
// Các biến này có thể dùng ở nhìu screen
// Ví dụ như 2 screen là Hotel Screen và Room Screen của Customer cần đồng bộ cái chọn ngày, tất là dùng chung biến date picker
// Thay vì phải truyền props lum la rất phiền, thì có thể gọi context

import { useState, createContext } from 'react';

// globalContext như là người cung cấp thông tin (Context Provider)
// TÍNH ĐẶT LÀ userContext nhưng sợ tụi bây lộn với cái hook useContext
const globalContext = createContext()

const hotelList = [
    {
        id: 1, // Id of the hotel
        hotel_name: 'Haley House', // Name of the hotel
        room_name: 'Room 1', // Room name
        room_type: 'Deluxe',
        thumbnail: 'LINK HÌNH',
        price: '123.000', // Smallest Price of the hotel
    },
    {
        id: 2,
        hotel_name: 'Bixcuit',
        room_name: 'Room 1',
        room_type: 'Deluxe',
        thumbnail: 'LINK HÌNH',
        price: '100.000',
    },
    {
        id: 3,
        hotel_name: 'Anis',
        room_name: 'Room 1',
        room_type: 'Deluxe',
        thumbnail: 'LINK HÌNH',
        price: '150.000',
    },
    {
        id: 4,
        hotel_name: 'Zed',
        room_name: 'Room 1',
        room_type: 'Deluxe',
        thumbnail: 'LINK HÌNH',
        price: '110.000',
    },
    {
        id: 4,
        hotel_name: 'Zed',
        room_name: 'Room 1',
        room_type: 'Deluxe',
        thumbnail: 'LINK HÌNH',
        price: '110.000',
    },
]

function GlobalProvider ({ children }) {
    // ---------- Tạo ra các biến "global"
    
    // Biến này dùng để check role => nếu là guest thì bắt phải đăng nhập mới cho đặt phòng, ...
	const [role, setRole] = useState('guest')
    // const [userName, setUserName] = useState('-')
    // const [userId, setUserId] = useState('-')
    // const [userJoycoin, setUserJoycoin] = useState(0)
    
    // Set sẵn mặc định ngày bắt đầu là hôm nay, và ngày kết thúc là ngày hôm sau
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const [dateRange, setDateRange] = useState({ startDate: today, endDate: tomorrow });
    
    // Biến session global dùng để lưu lịch sử xem phòng
    const [recentlyViewList, setRecentlyViewList] = useState(hotelList)

    const globalData = {
        role, setRole,
        dateRange, setDateRange,
        // userName, setUserName,
        // userId, setUserId,
        // userJoycoin, setUserJoycoin,
        recentlyViewList, setRecentlyViewList,
    }

    return (
        <globalContext.Provider value={ globalData }>
            { children }
        </globalContext.Provider>
    )
}

export { globalContext, GlobalProvider }