import axiosInstance from "../configs";

// const modInfo = {
//     hotelName : 'Harley House',
//     address: 'So 1 duong vao tym em, iu em rat nhieu',
//     rating: 4.5,
//     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Yeu em khong loi thoat',
//     owner: 'Hoa Hau Y Nhi',
//     accept: true,
//     phone: "0967846969",
//     email: "harleyiuem@gmail.com",
//     username: "harleyharley"
// }
export default async function getModInfo() {
    let res = null;
    try {
        console.log("HERE")
        res = await axiosInstance.get("/mod/info");
        //console.log(`Message: ${res.data.message}- Role: ${res.data.role}`);
        //console.log(JSON.stringify(res.data, null, 2));

        //axiosInstance.defaults.headers.common["auth-token"] = res.headers["auth-token"];
        //console.log("VERIFY DATA:", res.data.message);
        let img = res.data.message[0]["image"]
        if(!img)
        {
            img = "https://i.imgur.com/TMfTk0F.jpg"
        }



        let modInfo = {
            hotelName : res.data.message[0]["hotel_name"],
            address: res.data.message[0]["address"],
            description:res.data.message[0]["description"],
            owner: res.data.message[0]["owner_name"],
            accept: res.data.message[0]["isAccepted"],
            phone: res.data.message[0]["phone"][0],
            email: res.data.message[0]["email"][0],
            username: res.data.message[0]["username"][0],
            wallet: res.data.message[0]["wallet"][0],
            image : img
        }

        return modInfo;
    }
    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }
    return [];
}
