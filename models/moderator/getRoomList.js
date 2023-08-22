import axiosInstance from "../configs";

export default async function getRoomList() {
    let res = null;
    try {

        res = await axiosInstance.get("/mod/hotel/room_list");
        //console.log(`Message: ${res.data.message}- Role: ${res.data.role}`);
        //console.log(JSON.stringify(res.data, null, 2));
   
        //axiosInstance.defaults.headers.common["auth-token"] = res.headers["auth-token"];
      
    }
    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }

    let roomList = []
    let amenitiesName = new Set()
    let amenities = []

    if(res!=null)
    {
      
        let message = res.data.message
        //console.log(message)
        let roomType = new Map()
        let count = 0
        for( let i = 0 ; i<message.length ; i++ )
        {
            // console.log("message:",message[i])
            // console.log("MAP:",message[i]["room_type"])
            if(roomType.has(message[i]["room_type"]) == false)
            {
                
                roomType.set(message[i]["room_type"],count);
                ++count;
            }
        }
        roomType.forEach((key,value) => {
            roomList.push(
                {
                    roomType: value,
                    roomList: []
                }
            )
        });


        for( let i = 0 ; i<message.length ; i++ )
        {
            console.log(message[i][""])
            roomList[roomType.get(message[i]["room_type"])].roomList.push(
                {
                    id : message[i]["_id"],
                    name:message[i]["name"],
                    price: message[i]["price"],
                    info: [
                            {
                                label: "area",
                                value: message[i]["area"],
                            },
                            {
                                label: "bed",
                                value: message[i]["bedroom"],
                            },
                            {
                                label: "capacity",
                                value: message[i]["guest"],
                            },
                    ],
                    description: message[i]["description"],
                    image: message[i]["image"],
                    amenities: message[i]["amenities"],
                }
            );

            for (a of message[i]["amenities"])
            {
                if(amenitiesName.has(a["name"]) == false)
                {
                    amenitiesName.add(a["name"])
                    amenities.push(a)
                }
            }
        }
    }
    
    return {roomList: roomList, amenities : amenities}
}
