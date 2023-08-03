const hotelList = [
    {
        id: 1,
        name: 'Haley House',
        location: 'District 7, HCM',
        star: '4.8',
        price: '123.000',
        slug: 'haleyhouse'
    },
    {
        id: 2,
        name: 'Bixcuit',
        location: 'District BT, HCM',
        star: '4.6',
        price: '100.000',
        slug: 'bixcuit'
    },
    {
        id: 3,
        name: 'Anis',
        location: 'District 6, HCM',
        star: '4.7',
        price: '150.000',
        slug: 'anis'
    },
    {
        id: 4,
        name: 'Truro',
        location: 'District 5, HCM',
        star: '4.2',
        price: '110.000',
        slug: 'truro'
    },
]

export default async function getHotelList() {
    return hotelList
}