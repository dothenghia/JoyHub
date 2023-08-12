import axiosInstance from "../configs";

// capitalize first letter of each word
function capitalize(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default async function getModerator() {
    try {
        const res = await axiosInstance.get("admin/moderators/inactive");
        // console.log(`[INFO] Get moderator result: ${JSON.stringify(res.data)}`);
        const moderators = res.data.moderators.result.map((moderator) => {
            return {
                id: moderator.account_id,
                name: capitalize(moderator.hotel_name),
                address: capitalize(moderator.address),
                description: moderator.description,
                owner: {
                    username: moderator.account_id,
                    name: moderator.owner_name,
                    phone: moderator.phone,
                    email: moderator.account.email,
                }
            }
            // console.log(`[INFO] Get moderator result: ${JSON.stringify(moderator)}`);
        });
        console.log(`[INFO] Get moderator result: ${JSON.stringify(moderators)}`);
        return moderators;
    }
    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return {error: err.response.data.message};
        }
    }
}
