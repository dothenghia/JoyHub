

export default function calculateDay(start, end) {
    if (start && end) {
        return Math.round((end - start)/ (1000 * 60 * 60 * 24)) - 1
    }
    return 0
}
