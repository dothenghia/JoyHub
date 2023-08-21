const favoriteList = [
    {
        id: 1, // Id of the hotel
        hotel_name: 'Haley House', // Name of the hotel
        thumbnail: 'LINK HÌNH',
        address: 'District 7, HCM', // Location of the hotel
        price: '123.000', // Smallest Price of the hotel
    },
    {
        id: 2,
        hotel_name: 'Bixcuit',
        thumbnail: 'LINK HÌNH',
        address: 'District BT, HCM',
        price: '100.000',
    },
    {
        id: 3,
        hotel_name: 'Anis',
        thumbnail: 'LINK HÌNH',
        address: 'District 6, HCM',
        price: '150.000',
    },
    {
        id: 4,
        hotel_name: 'Zed',
        thumbnail: 'LINK HÌNH',
        address: 'District 5, HCM',
        price: '110.000',
    },
]

export default async function getFavoriteList() {
    return favoriteList
}