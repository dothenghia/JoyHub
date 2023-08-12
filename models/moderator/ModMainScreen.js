import getVerifyList from "./getVerifyList"
import getCheckinList from "./getCheckinList"
import getCheckoutList from "./getCheckoutList"

export default async function modMainScreen()
{

    return {
        verifyList : await getVerifyList(),
        checkinList : await getCheckinList(),
        checkoutList : await getCheckoutList(),
    }
}
