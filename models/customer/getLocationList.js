const locationList = [
    {
        id: 1,
        name: 'Ho Chi Minh City',
        districts: [
            {
                d_id: '1_1',
                name: 'District 1',
            },
            {
                d_id: '1_2',
                name: 'District 2',
            },
            {
                d_id: '1_3',
                name: 'District 3',
            },
            {
                d_id: '1_4',
                name: 'District 4',
            },
            {
                d_id: '1_5',
                name: 'District 5',
            },
            {
                d_id: '1_6',
                name: 'District 6',
            },
            {
                d_id: '1_11',
                name: 'District 11',
            },
        ],
    },
    {
        id: 2,
        name: 'Ha Noi',
        districts: [
            {
                d_id: '2_1',
                name: 'Ha Dong',
            },
            {
                d_id: '2_2',
                name: 'Hang Ma',
            },
            {
                d_id: '2_3',
                name: 'Chua Lang',
            },
            {
                d_id: '2_4',
                name: 'Chua Pho',
            },
            {
                d_id: '2_5',
                name: 'Dong Da',
            },
            {
                d_id: '2_6',
                name: 'Hoan Kiem',
            },
            {
                d_id: '2_11',
                name: 'Bac K',
            },
        ],
    },
    {
        id: 3,
        name: 'Da Nang',
        districts: [
            {
                d_id: '2_1',
                name: 'Minh Ngoc',
            },
            {
                d_id: '2_2',
                name: 'Thanh Ngan',
            },
        ],
    },
    {
        id: 3,
        name: 'Da Nang',
        districts: [
            {
                d_id: '2_1',
                name: 'Minh Ngoc',
            },
            {
                d_id: '2_2',
                name: 'Thanh Ngan',
            },
        ],
    },
    
]


export default async function getLocationList() {
    return locationList
}