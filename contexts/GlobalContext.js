// File này dùng để tạo ra các biến dùng chung cho customer
// Các biến này có thể dùng ở nhìu screen
// Ví dụ như 2 screen là Hotel Screen và Room Screen của Customer cần đồng bộ cái chọn ngày, tất là dùng chung biến date picker
// Thay vì phải truyền props lum la rất phiền, thì có thể gọi context

import { useState, createContext } from 'react';

// globalContext như là người cung cấp thông tin (Context Provider)
// TÍNH ĐẶT LÀ userContext nhưng sợ tụi bây lộn với cái hook useContext
const globalContext = createContext()

function GlobalProvider ({ children }) {
    // Tạo ra các biến "global"
	const [role, setRole] = useState('guest') // Biến này dùng để check role => nếu là guest thì bắt phải đăng nhập mới cho đặt phòng, ...
    const [dateRange, setDateRange] = useState({ startDate: undefined, endDate: undefined });

    const globalData = {
        role, setRole,
        dateRange, setDateRange,
    }

    return (
        <globalContext.Provider value={ globalData }>
            { children }
        </globalContext.Provider>
    )
}

export { globalContext, GlobalProvider }