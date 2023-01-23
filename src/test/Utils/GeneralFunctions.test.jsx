import { closeSessionHandler, formatCurrency, formatDate, refreshToken, verifyAuth } from "../../Utils/GeneralFunctions"

describe('Test on GeneralFunctions', () => {
    const testToken = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBpc2xhLWRlbC1sYWdvLmNvbSIsInVzZXItaWQiOiI5ZDUyN2RkOS05YmZkLTQ1YjYtYTNkNC02ZjBhZGRlOWNjZWQiLCJlbWFpbCI6ImFkbWluQGlzbGEtZGVsLWxhZ28uY29tIiwiaXNzIjoiaXNsYS5kZWwubGFnbyIsImlhdCI6MTY3NDUxNDM0NSwiZXhwIjoxNjc0NTE0NjQ1fQ.sgterGBxNS6lFgVJeJmAtx2LYeEKiOSXlAFm9CtkmMdGOXJAbuNk2UJ53waqOkKFeJz8oEesLgMT3mQORMqhkw"
    test('Should format date', () => {
        const initialDate = "2020-05-18"
        const dateFormated = formatDate(initialDate)
        expect(dateFormated).toBe("18/05/2020")
    })
    test('Should format currency', () => {
        const initialCurrency = "1225.35"
        const currencyFormated = formatCurrency(initialCurrency)
        expect(currencyFormated).toBe("$1.225,35")
    })
    test('Should verify session correctly', () => {
        const verifyCase1 = verifyAuth(1)
        expect(verifyCase1).toBeTruthy()
        const verifyCase2 = verifyAuth(2)
        expect(verifyCase2).toBeFalsy()
        const verifyCase3 = verifyAuth(3)
        expect(verifyCase3).toBeTruthy()
        const verifyCase4 = verifyAuth(4)
        expect(verifyCase4).toBeFalsy()
    })
    test('Should close session', () => {
        closeSessionHandler()
    })
    test('Should refresh token', () => {
        refreshToken(testToken)
    })
})