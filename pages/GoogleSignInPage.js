import {t, Selector, ClientFunction} from 'testcafe'

var txtEmail = Selector('#identifierId')
var txtPassword = Selector('[name="password"]')
var btnNext = Selector('div').withAttribute('id',/.*Next/)

export async function signIn(username, password) {
    await t
        .typeText(txtEmail, username)
        .click(btnNext)
        .typeText(txtPassword, password)
        .click(btnNext)
    // wait for the login to be completed
    await btnNext.with({ visibilityCheck: false })()
}