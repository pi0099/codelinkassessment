import {t, Selector} from 'testcafe'
import * as SignInPage from './SignInPage'

var lnkSignIn = Selector('[href="/sign_in"]')

export async function signIn(method, username, password) {
    await t.click(lnkSignIn)
    await SignInPage.signIn(method, username, password)
}