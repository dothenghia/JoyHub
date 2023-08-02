const hotelInformation = {
    id: 1,
    name: 'Haley House',
    slug: 'haleyhouse',
    location: 'District 7, HCM',
    star: '4.8',
    review: 520,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..',

    facilities: [
        {
            f_id: 1,
            f_name: 'Free Wifi',
        },
        {
            f_id: 2,
            f_name: 'River View',
        },
        {
            f_id: 3,
            f_name: 'Bath Tub',
        },
    ],

    roomList: [
        {
            id: 1,
            name: 'Queen Room',
            price: '123.000',
            slug: 'queen-room'
        },
        {
            id: 2,
            name: 'Deluxe Room',
            price: '200.000',
            slug: 'deluxe-room'
        },
        {
            id: 3,
            name: 'Hehe Room',
            price: '666.000',
            slug: 'hehe-room'
        },
    ],

    reviews: [
        {
            review_id: 123,
            r_name: 'The Nghia',
            r_comment: 'Really love this hotel <3 They always make me feel cozyyyyy.',
            r_star: 5,
        },
        {
            review_id: 462,
            r_name: 'Mac Tuan Trung',
            r_comment: 'Cho nay rat la oke, Toi rat thich',
            r_star: 5,
        }
    ]
}


export default async function getHotelInformation() {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(hotelInformation)
            console.log("[getHotelInformation.js] Finish")
        }, 2000)
    })
}