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
            f_icon: 'wifi',
        },
        {
            f_id: 2,
            f_name: 'Pool',
            f_icon: 'pool',
        },
        {
            f_id: 3,
            f_name: 'Bath Tub',
            f_icon: 'bathtub',
        },
        {
            f_id: 4,
            f_name: 'Air Conditioner',
            f_icon: 'ac',
        },
        {
            f_id: 5,
            f_name: 'Meal',
            f_icon: 'meal',
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
            r_star: 4.5,
        }
        ,
        {
            review_id: 462,
            r_name: 'Mac Tuan Trung',
            r_comment: 'Cho nay rat la oke, Toi rat thich',
            r_star: 3,
        }
        ,
        {
            review_id: 462,
            r_name: 'Mac Tuan Trung',
            r_comment: 'Cho nay rat la oke, Toi rat thich',
            r_star: 2,
        }
        ,
        {
            review_id: 462,
            r_name: 'Mac Tuan Trung',
            r_comment: 'Cho nay rat la oke, Toi rat thich',
            r_star: 1,
        }
        ,
        {
            review_id: 462,
            r_name: 'Mac Tuan Trung',
            r_comment: 'Cho nay rat la oke, Toi rat thich',
            r_star: 1.5,
        }
        ,
        {
            review_id: 462,
            r_name: 'Mac Tuan Trung',
            r_comment: 'Cho nay rat la oke, Toi rat thich',
            r_star: 2.5,
        }
        ,
        {
            review_id: 462,
            r_name: 'Mac Tuan Trung',
            r_comment: 'Cho nay rat la oke, Toi rat thich',
            r_star: 1.5,
        }
        ,
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
        }, 500)
    })
}