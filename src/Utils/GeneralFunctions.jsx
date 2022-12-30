const formatDate = (date) => {
    const dateToArray = date.split("-")
    const formatedDate = dateToArray[2] + "/" + dateToArray[1] + "/" + dateToArray[0]
    return formatedDate
}
const formatCurrency = (value) => {
    let COP = Intl.NumberFormat("de-DE", {
        currency: "COP",
    });
    return `$${COP.format(parseFloat(value).toFixed(2))}`
}
const verifyAuth = (type) => {
    if (type === 1) {
        if (!sessionStorage.AuthToken) {
            return true
        }
        else {
            document.location = '/menu'
            return false
        }
    }

    else if (type === 2) {
        if (sessionStorage.AuthToken) {
            return true
        }
        else {
            document.location = '/'
            return false
        }
    }
}

const closeSessionHandler = () => {
    sessionStorage.clear()
    document.location = '/'
}


export { formatDate, formatCurrency, verifyAuth, closeSessionHandler }