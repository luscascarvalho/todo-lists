const formatDateToBR = (isoDate) => {
    const date = new Date(isoDate)

    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()

    const hours = String(date.getHours()).padStart(2, '0')
    const minute = String(date.getMinutes()).padStart(2, '0')

    return `${day}.${month}.${year}.${hours}.${minute}`
}

export {
    formatDateToBR
}