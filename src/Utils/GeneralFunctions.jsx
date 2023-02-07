import jwt_decode from "jwt-decode";

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
    switch (type) {
        case 1:
            if (!sessionStorage.AuthToken) {
                return true
            }
            else {
                document.location = '/menu'
                return false
            }
        case 2:
            if (sessionStorage.AuthToken) {
                return true
            }
            else {
                document.location = '/'
                return false
            }
        case 3:
            return true
        default:
            return false;
    }
}

const closeSessionHandler = () => {
    sessionStorage.clear()
    document.location = '/'
}

const refreshToken = (testToken) => {
    const tokenForDecoded = sessionStorage.getItem("AuthToken") || testToken
    if (tokenForDecoded) {
        var token = tokenForDecoded.replace("Bearer ", "");
        var decoded = jwt_decode(token);
        var expirationDate = (decoded.exp * 1000) - 60000
        var currentDate = Date.now()
    }
    if (currentDate > expirationDate) {
        fetch(`${process.env.REACT_APP_MS_BASE_URL}${process.env.REACT_APP_MS_SECURITY_PATH}/token/refresh`, {
            method: 'POST',
            headers: {
                'user-id': sessionStorage.getItem('UserId'),
                'Authorization': sessionStorage.getItem('AuthToken')
            }
        })
            .then((response) => {
                if (response.status === 401) {
                    closeSessionHandler()
                }
                return response.json()
            }).then(data => {
                if (data.auth_token) {
                    sessionStorage.setItem('AuthToken', `Bearer ${data.auth_token}`)
                    sessionStorage.setItem('ExpirationDate', data.expiration_date)
                    sessionStorage.setItem('UserId', data.user_id)
                }
            })
            .catch((error) => {
            })
    }
}


export { formatDate, formatCurrency, verifyAuth, closeSessionHandler, refreshToken }