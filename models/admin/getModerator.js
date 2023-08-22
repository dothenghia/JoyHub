import axiosInstance from "../configs";

// capitalize a first letter of each word
function capitalize(str) {
    if (!str) return str;
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default async function getModerator() {
    try {
        const res = await axiosInstance.get("admin/moderators/inactive");
        return res.data.message.map((item) => {
                if (!item) return null;
                // console.log(`[INFO] Get moderator result: ${JSON.stringify(item)}`);
                if (!item.moderator[0]) {
                    return {
                        id: item.account_id,
                        name: "No hotel",
                        address: "No address",
                        description: "No description",
                        owner: {
                            username: item.username,
                            name: "No name",
                            phone: "No phone",
                            email: "No email",
                        }
                    }
                }
                return {
                    id: item.account_id,
                    name: capitalize(item.moderator[0].hotel_name),
                    address: capitalize(item.moderator[0].address),
                    description: item.moderator[0].description,
                    owner: {
                        username: item.username,
                        name: item.moderator[0].owner_name,
                        phone: item.phone,
                        email: item.email,
                    }
                }

            }
        )
            ;
    } catch
        (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return {error: err.response.data.message};
        }
    }
}
