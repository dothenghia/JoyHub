const reservationList = [
    {
        id: 1,
        status: 'Waiting',
        hotel_name: 'Haley House',
        room_name: 'Queen Room (Deluxe)',
        date: 'Thu, 4/6/2023 - Sat, 6/6/2023',
        price: '400.000',
        slug: 're_123'
    },
    {
        id: 2,
        status: 'Cancelled',
        hotel_name: 'Bixcuit',
        room_name: 'VIP Room',
        date: 'Thu, 4/6/2023 - Sat, 6/6/2023',
        price: '360.000',
        slug: 're_232'
    },
    {
        id: 3,
        status: 'Completed',
        hotel_name: 'Anis',
        room_name: 'King Room (Standard)',
        date: 'Thu, 4/6/2023 - Sat, 6/6/2023',
        price: '150.000',
        slug: 're_143'
    },
    {
        id: 4,
        status: 'Completed',
        hotel_name: 'Truro',
        room_name: 'Escape Room',
        date: 'Thu, 4/6/2023 - Sat, 6/6/2023',
        price: '110.000',
        slug: 're_666'
    },
    {
        id: 5,
        status: 'Completed',
        hotel_name: 'HCMUS',
        room_name: 'Room I35',
        date: 'Thu, 4/6/2023 - Sat, 6/6/2023',
        price: '110.000',
        slug: 're_520'
    },
]

export default async function getReservationList() {
    return reservationList
}