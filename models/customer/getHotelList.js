// request : None

// respone :
// [
const hotelList = [
    {
        id: 1, // Id of the hotel
        name: 'Haley House', // Name of the hotel
        thumbnail: 'LINK HÌNH',
        location: 'District 7, HCM', // Location of the hotel
        star: '4.8', // Average rating of the hotel
        price: '123.000', // Smallest Price of the hotel
    },
    {
        id: 2,
        name: 'Bixcuit',
        thumbnail: 'LINK HÌNH',
        location: 'District BT, HCM',
        star: '4.6',
        price: '100.000',
    },
    {
        id: 3,
        name: 'Anis',
        thumbnail: 'LINK HÌNH',
        location: 'District 6, HCM',
        star: '4.7',
        price: '150.000',
    },
    {
        id: 4,
        name: 'Zed',
        thumbnail: 'LINK HÌNH',
        location: 'District 5, HCM',
        star: '4.2',
        price: '110.000',
    },
]

export default async function getHotelList() {
    return hotelList
}