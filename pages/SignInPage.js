import {t, Selector} from 'testcafe'
import * as GoogleSignInPage from './GoogleSignInPage'

var btnGoogleSignIn = Selector('span').withText('Sign in with Google')

export async function signIn(method = "Google", username, password) { 
    if(method ==  "Google") {
        await t.click(btnGoogleSignIn)
        await GoogleSignInPage.signIn(username, password)
    } else {
        // Not implemented yet
    }
    
}