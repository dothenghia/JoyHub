


export default function formatDate(inputDate) {
    if (inputDate === undefined) {
        return 'Not selected yet'
    }

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[inputDate.getDay()];

    let date = inputDate.getDate()
    let month = inputDate.getMonth() + 1
    let year = inputDate.getFullYear()

    let stringDate = `${day}, ${date}/${month}/${year}`
    return stringDate
}
